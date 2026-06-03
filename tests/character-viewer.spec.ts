/**
 * Character Viewer error sweep — equips every clothing item across every slot
 * via the "Clothes Testing" debug passage and verifies no SugarCube errors
 * (`.error-view`) and no Renderer load errors (missing sprite files) appear.
 *
 * Lives in tests/ so `npm test` (default playwright.config.ts) picks it up.
 */

import { test, expect } from "@playwright/test";
import { openGame, navigateTo, assertNoErrors, type Page } from "./helpers.js";

const ALL_SLOTS = [
	"upper",
	"lower",
	"under_upper",
	"under_lower",
	"head",
	"face",
	"neck",
	"hands",
	"handheld",
	"earrings",
	"rings",
	"legs",
	"feet",
	"genitals",
] as const;

type LoadError = { layer: string; src: string };
type Failure = { slot: string; item: string; newErrorViews: number; loadErrors: LoadError[] };

// Config for ignoring existing bugs.
//
// Entries match a Failure as long as ALL of the entry's keys match.
// `srcs` matches if every listed src appears in the failure's loadErrors.
type KnownBug = { slot: string; item: string; srcs: string[]; reason: string };
const KNOWN_GAME_BUGS: KnownBug[] = [
	{
		slot: "genitals",
		item: "chastity parasite",
		srcs: ["img/body/ear-slime-chastity-undefined.png"],
		// penis_parasite "chastity-undefined" path produced when chastity_type
		// lookup returns undefined for the Character Viewer's synthesized body
		// state.
		reason: "penis_parasite chastity path resolves to undefined size",
	},
	{
		slot: "upper",
		item: "swim shirt",
		srcs: ["img/clothes/upper/swimshirt/full.png"],
		// Upstream commit d87803f6 moved swim shirt assets from 
		// img/clothes/upper/swimshirt/ to img/clothes/under-upper/swimshirt/
		// but the old definition still exists/appears in gallery, so we ignore.
		reason: "d87803f6 moved swim shirt to under-upper, did old definition still appears in gallery",
	},
	// Handheld right-hold renders: clothes-testing.twee always sets
	// arm_right="hold" regardless of the item's holdPosition, so items with
	// holdPosition "idle_both" / "right_cover" still try to load right-hold.png
	// even though their natural pose lives in a different file. Would need fix
	// to clothes-testing.twee.
	{
		slot: "handheld",
		item: "pom poms",
		srcs: ["img/clothes/handheld/pompoms/right-hold.png"],
		reason: "clothes-testing.twee ignores holdPosition; pompoms is idle_both, lacks right-hold pose",
	},
	{
		slot: "handheld",
		item: "cane",
		srcs: ["img/clothes/handheld/cane/right-hold.png"],
		reason: "clothes-testing.twee ignores holdPosition; cane is right_cover, lacks right-hold pose",
	},
	{
		slot: "handheld",
		item: "forearm crutch",
		srcs: ["img/clothes/handheld/crutch/right-hold.png"],
		reason: "clothes-testing.twee ignores holdPosition; crutch is right_cover, lacks right-hold pose",
	},
	{
		slot: "handheld",
		item: "candy cane",
		srcs: ["img/clothes/handheld/candy cane/right-hold.png"],
		reason: "clothes-testing.twee ignores holdPosition; candy cane is right_cover, lacks right-hold pose",
	},
];

function isKnownBug(failure: Failure): boolean {
	return KNOWN_GAME_BUGS.some(
		k =>
			k.slot === failure.slot &&
			k.item === failure.item &&
			k.srcs.every(s => failure.loadErrors.some(le => le.src === s))
	);
}

async function setupErrorCapture(page: Page) {
	await page.evaluate(() => {
		const W = window as any;
		const cv = W.SugarCube.State.variables.characterViewer;
		cv.controls.animations = false;
		// Default body needs penis enabled — genitals-slot items (e.g. chastity
		// parasite) request `<integrity><penis_size>.png` and have no plain
		// `<integrity>.png` fallback when penisSize is "none".
		cv.bodyState.penisSize = "2";
		cv.bodyState.penisVirgin = "default";
		cv.bodyState.ballsExist = true;
		W.__previewLoadErrors = [] as LoadError[];
		const listener = W.Renderer.defaultListener;
		const orig = listener.loadError;
		listener.loadError = function (layer: string, src: string) {
			W.__previewLoadErrors.push({ layer, src });
			if (orig) orig.call(listener, layer, src);
		};
	});
}

async function readCatalog(page: Page) {
	// Dedup by name: matches Character Viewer's listbox behavior in
	// game/base-debug/clothes-testing.twee (clothesTestingGenerateClothes).
	// Multiple setup.clothes entries can share a name (different colourBlind,
	// integrity, etc. — viewer keeps first occurrence per name).
	return page.evaluate((slotsArg: readonly string[]) => {
		const result: Record<string, Array<{ name: string; index: number }>> = {};
		for (const slot of slotsArg) {
			const items: any[] = (window as any).setup.clothes[slot];
			if (!items) continue;
			const seen = new Map<string, { name: string; index: number }>();
			for (const it of items) {
				const name = String(it.name);
				if (!seen.has(name)) seen.set(name, { name, index: Number(it.index) });
			}
			result[slot] = [...seen.values()];
		}
		return result;
	}, ALL_SLOTS);
}

async function equipAndRender(page: Page, slot: string, index: number) {
	// Reset every slot, then equip target. Resets per-render loadError buffer.
	await page.evaluate(
		({ targetSlot, targetIndex, allSlots }) => {
			const cv = (window as any).SugarCube.State.variables.characterViewer;
			for (const s of allSlots) cv.clothesEquipped[s] = 0;
			cv.clothesEquipped[targetSlot] = targetIndex;
			cv.controls.animations = false;
			// preserve body state set in setupErrorCapture
			cv.bodyState.penisSize = "2";
			cv.bodyState.penisVirgin = "default";
			cv.bodyState.ballsExist = true;
			(window as any).__previewLoadErrors = [];
		},
		{ targetSlot: slot, targetIndex: index, allSlots: [...ALL_SLOTS] }
	);

	// Hook renderingDone, trigger update, await full render (sync or async).
	await page.evaluate(() => {
		return new Promise<void>(resolve => {
			const listener = (window as any).Renderer.defaultListener;
			const orig = listener.renderingDone as ((time: number) => void) | undefined;
			listener.renderingDone = function (time: number) {
				listener.renderingDone = orig;
				if (orig) orig.call(listener, time);
				resolve();
			};
			(window as any).SugarCube.Wikifier.wikifyEval("<<clothesTestingImageUpdate>>");
		});
	});
}

test.describe("Character Viewer", () => {
	test("renders every clothing item without errors", async ({ page }) => {
		test.setTimeout(120_000);

		// Navigate to passage to init $characterViewer.
		await openGame(page);
		await navigateTo(page, "Clothes Testing");
		await setupErrorCapture(page);

		const catalog = await readCatalog(page);

		const failures: Failure[] = [];
		// Track .error-view count delta per item to attribute new errors.
		let prevErrorViews = await page.locator(".error-view").count();

		for (const slot of ALL_SLOTS) {
			const items = catalog[slot] ?? [];
			for (const item of items) {
				await equipAndRender(page, slot, item.index);

				const newErrorViews = (await page.locator(".error-view").count()) - prevErrorViews;
				const loadErrors = (await page.evaluate(
					() => (window as any).__previewLoadErrors as LoadError[]
				)) ?? [];

				if (newErrorViews > 0 || loadErrors.length > 0) {
					failures.push({ slot, item: item.name, newErrorViews, loadErrors });
				}
				prevErrorViews += newErrorViews;
			}
		}

		// Final SugarCube error sanity check (catches anything not tracked above).
		await assertNoErrors(page);

		// Filter known game-side bugs; fail only on new/unexpected failures.
		const unexpected = failures.filter(f => !isKnownBug(f));
		expect(
			unexpected,
			`Character Viewer error sweep — unexpected failures:\n${JSON.stringify(unexpected, null, 2)}`
		).toEqual([]);
	});
});
