const ImagePack = (() => {
	const defaultImagePack = "img";
	const imagepacksRoot = "img/imagepacks";
	const imgRoot = "img/";
	const mysteryPack = "mysterious";
	const imagepackNamePattern = /^[A-Za-z0-9_-]+$/;
	const imagepacksPathPrefix = `${imagepacksRoot}/`;
	const domSourceAttribute = "data-imagepack-src";
	const domIndexAttribute = "data-imagepack-index";
	let domResolverInstalled = false;

	/* Top-down order mirrors devTools/apkbuilder/imagepack_builds copy order. */
	const buildFallbacks = {
		vanilla: ["dolp"],
		au: ["au", "dolp"],
		aumasc: ["aumasc", "dolp"],
		b3s: ["dolp_b3s", "kaervek", "b3s", "dolp"],
		b3s_hikfem: ["b3s_hikfemsubs", "b3s_hikfem", "dolp_b3s", "kaervek", "b3s", "dolp"],
		b3s_hikmale: ["b3s_hikmale", "dolp_b3s", "kaervek", "b3s", "dolp"],
		b3s_lllysmasc: ["lllysmasc", "dolp_b3s", "kaervek", "b3s", "dolp"],
		gooseandro: ["gooseandro", "goosefemsubs", "goosefem", "dolp"],
		goosefem: ["goosefemsubs", "goosefem", "dolp"],
		goosemasc: ["goosemascsubs", "goosemasc", "dolp"],
		kitmint: ["kitmint", "dolp"],
		mikili: ["mikilisubs", "mikili", "dolp"],
		mizz: ["mizz", "dolp"],
		rotting: ["rotting", "dolp"],
		susato: ["susato", "dolp"],
	};
	const imagePackNames = Object.freeze(Object.keys(buildFallbacks));

	function normalisePath(src) {
		return src.replace(/\\/g, "/");
	}

	function isImageElement(element) {
		return typeof HTMLImageElement !== "undefined" && element instanceof HTMLImageElement;
	}

	function normaliseSrc(src) {
		return normalisePath(String(src || "").trim());
	}

	function canUseImagePack(src) {
		const normalised = normaliseSrc(src);
		return normalised.startsWith(imgRoot) && !normalised.startsWith(imagepacksPathPrefix);
	}

	function isKnownPack(imagepack) {
		return (
			typeof imagepack === "string" &&
			imagepackNamePattern.test(imagepack) &&
			Object.prototype.hasOwnProperty.call(buildFallbacks, imagepack)
		);
	}

	function normalisePack(imagepack) {
		return isKnownPack(imagepack) ? imagepack : defaultImagePack;
	}

	function parseSelection(imagepack, imagepackMysterious) {
		return {
			pack: normalisePack(imagepack),
			mystery: imagepackMysterious === true,
		};
	}

	function getStateSelection() {
		const state = window.State?.variables;
		return parseSelection(state?.options?.imagepack ?? state?.imagepack, state?.options?.imagepackMysterious ?? state?.imagepackMysterious);
	}

	function getActivePack() {
		return getStateSelection().pack;
	}

	function getActiveMystery() {
		return getStateSelection().mystery;
	}

	function getSelection(imagepack, imagepackMysterious) {
		return imagepack === undefined && imagepackMysterious === undefined ? getStateSelection() : parseSelection(imagepack, imagepackMysterious);
	}

	function syncState(preferOptions = true) {
		const state = window.State?.variables;
		if (!state) return getStateSelection();

		const imagepack = preferOptions ? state.options?.imagepack ?? state.imagepack : state.imagepack ?? state.options?.imagepack;
		const imagepackMysterious = preferOptions
			? state.options?.imagepackMysterious ?? state.imagepackMysterious
			: state.imagepackMysterious ?? state.options?.imagepackMysterious;
		const selection = parseSelection(imagepack, imagepackMysterious);

		state.imagepack = selection.pack;
		state.imagepackMysterious = selection.mystery;
		if (state.options) {
			state.options.imagepack = selection.pack;
			state.options.imagepackMysterious = selection.mystery;
		}
		return selection;
	}

	function applyOptionPack() {
		const current = syncState(true);
		clearRendererCaches();
		resolveDocumentImages(true);
		return current.pack;
	}

	function getFallbacks(imagepack, imagepackMysterious) {
		const { pack, mystery } = getSelection(imagepack, imagepackMysterious);
		const fallbacks = buildFallbacks[pack] || buildFallbacks[defaultImagePack];
		return mystery ? [...new Set([mysteryPack, ...fallbacks])] : fallbacks;
	}

	function getCandidates(src, imagepack, imagepackMysterious) {
		if (typeof src !== "string") return [src];

		const normalised = normalisePath(src);
		if (!canUseImagePack(normalised)) return [src];

		const relativePath = normalised.slice(imgRoot.length);
		const candidates = getFallbacks(imagepack, imagepackMysterious).map(pack => `${imagepacksRoot}/${pack}/${relativePath}`);
		candidates.push(normalised);
		return candidates;
	}

	function getCacheKey(src, imagepack, imagepackMysterious) {
		if (typeof src !== "string") return src;
		const normalised = normalisePath(src);
		if (!canUseImagePack(normalised)) return normalised;

		const { pack, mystery } = getSelection(imagepack, imagepackMysterious);
		return `${pack}${mystery ? "+mysterious" : ""}:${normalised}`;
	}

	function setImageSource(image, src) {
		const candidates = getCandidates(src);
		let candidateIndex = 0;
		const originalOnError = image.onerror;

		image.onerror = event => {
			candidateIndex++;
			if (candidateIndex < candidates.length) {
				image.src = candidates[candidateIndex];
				return;
			}
			if (typeof originalOnError === "function") originalOnError.call(image, event);
		};

		if (isImageElement(image) && canUseImagePack(src)) {
			image.setAttribute(domSourceAttribute, normaliseSrc(src));
			image.setAttribute(domIndexAttribute, "0");
		}
		image.src = candidates[0];
	}

	function setDomImageCandidate(image, originalSrc, candidateIndex) {
		const candidates = getCandidates(originalSrc);
		const candidate = candidates[candidateIndex];
		if (!candidate) return;

		image.setAttribute(domSourceAttribute, originalSrc);
		image.setAttribute(domIndexAttribute, String(candidateIndex));
		if (normaliseSrc(image.getAttribute("src")) !== candidate) image.setAttribute("src", candidate);
	}

	function resolveImageElement(image, force = false) {
		if (!isImageElement(image)) return;

		const currentSrc = normaliseSrc(image.getAttribute("src"));
		let originalSrc = normaliseSrc(image.getAttribute(domSourceAttribute));
		let hasStoredOriginal = !!originalSrc;
		if (canUseImagePack(currentSrc) && (!originalSrc || !getCandidates(originalSrc).includes(currentSrc))) {
			originalSrc = currentSrc;
			hasStoredOriginal = false;
		}
		if (!canUseImagePack(originalSrc)) return;

		const candidates = getCandidates(originalSrc);
		if (!force && candidates.includes(currentSrc) && (hasStoredOriginal || candidates[0] === currentSrc)) return;
		setDomImageCandidate(image, originalSrc, 0);
	}

	function resolveImageTree(root, force = false) {
		if (!root) return;
		if (isImageElement(root)) resolveImageElement(root, force);
		if (typeof root.querySelectorAll !== "function") return;
		root.querySelectorAll("img[src]").forEach(image => resolveImageElement(image, force));
	}

	function resolveDocumentImages(force = false) {
		if (!window.document) return;
		resolveImageTree(window.document, force);
	}

	function handleDomImageError(event) {
		const image = event.target;
		if (!isImageElement(image)) return;

		const originalSrc = normaliseSrc(image.getAttribute(domSourceAttribute));
		if (!canUseImagePack(originalSrc)) return;

		const candidates = getCandidates(originalSrc);
		const nextIndex = Number(image.getAttribute(domIndexAttribute) || 0) + 1;
		if (nextIndex >= candidates.length) return;

		event.preventDefault();
		event.stopImmediatePropagation();
		setDomImageCandidate(image, originalSrc, nextIndex);
	}

	function startDomResolver() {
		if (domResolverInstalled || !window.document) return;
		domResolverInstalled = true;

		window.document.addEventListener("error", handleDomImageError, true);
		resolveDocumentImages();

		if (!window.MutationObserver) return;
		const observeRoot = window.document.documentElement || window.document.body;
		if (!observeRoot) return;

		const observer = new window.MutationObserver(mutations => {
			mutations.forEach(mutation => {
				if (mutation.type === "attributes") {
					resolveImageElement(mutation.target);
				} else {
					mutation.addedNodes.forEach(node => resolveImageTree(node));
				}
			});
		});
		observer.observe(observeRoot, {
			attributeFilter: ["src"],
			attributes: true,
			childList: true,
			subtree: true,
		});
	}

	function installDomResolver() {
		if (domResolverInstalled || !window.document) return;
		if (window.document.readyState === "loading") {
			window.document.addEventListener("DOMContentLoaded", startDomResolver, { once: true });
		} else {
			startDomResolver();
		}
	}

	function clearRendererCaches() {
		if (window.ImageCache && typeof window.ImageCache.clear === "function") window.ImageCache.clear();
		if (!window.Renderer) return;
		window.Renderer.ImageCaches = {};
		window.Renderer.ImageErrors = {};
		Object.values(window.Renderer.CanvasModelCaches || {}).forEach(cache => {
			Object.values(cache).forEach(model => window.Renderer.invalidateLayerCaches(model.layerList));
		});
	}

	function registerSetup() {
		if (!window.setup) return;
		window.setup.imagePackFallbacks = buildFallbacks;
		window.setup.imagePackNames = imagePackNames;
	}

	return Object.freeze({
		defaultImagePack,
		applyOptionPack,
		buildFallbacks,
		clearRendererCaches,
		getActiveMystery,
		getActivePack,
		getCacheKey,
		getCandidates,
		getFallbacks,
		installDomResolver,
		isKnownPack,
		normalisePack,
		registerSetup,
		resolveDocumentImages,
		resolveImageElement,
		setImageSource,
		syncState,
	});
})();

window.ImagePack = ImagePack;
ImagePack.registerSetup();
ImagePack.installDomResolver();
if (window.Renderer) window.Renderer.ImagePathResolver = ImagePack;
