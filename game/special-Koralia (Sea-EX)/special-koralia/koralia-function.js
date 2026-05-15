// game/03-JavaScript/named-npc.js
function koraliaStatusCheck() { 
	if (!koralia) 
	return (T.koraliaStatus = []);

	const koraliaStatus = [];

	const missing =
		!V.daily || !V.daily.mermaid ||
		!Array.isArray(V.koraliaSeen);
	if (missing) {
		console.warn("[Koralia] Missing/Invalid LI data in status check",{
			daily: V.daily,
			koraliaDaily: V.daily?.koralia,
		});
		T.koraliaStatus = ["DataInvalid"];
		return T.koraliaStatus
	}

	if (typeof modLISelected === "function" && !modLISelected("Koralia")) {
		const koraliaStatus = [];
		// first meet
		// while the sea rescue event counts as you having met koralia, there will still be an "official" meeting later
		if  (V.seaside_shop_intro || V.koralia_docksing || V.koralia_rescue.count) {
			koraliaStatus.push("met");
		}
		// Mermaid awake (?)
		// mermaid will not be active if the seal isn't removed
		// while there will be a .push in the scene, this is to make sure no one tries to save edit it out
		// note the chronic save editor -- Karl
		if (V.mermaidSeal >= 1) {
			koraliaStatus.push("awake");
			if (V.koralia.lust > 70 || V.koraliaStatus.includes("sealed")) {
				koraliaStatus.push("mRoaming");
				// mRoaming, or mer roam, is what allows other Koralia to be encountered
				// or if you have already dismissed them, seen screaming
				// at the start of every day, there will be a roll to decide if the one you'll be interacting with that day is normal Koralia or not
			}
		}
		// wary
		// there will be a wary reason but that should be in time, not here
		// can be either them seeing you cooperate with karl, can be the dismissal, I just wanna give them trust issues
		if (C.npc.koralia.rage > 1) {
			koraliaStatus.push("wary");
		}
	}
}
window.koraliaStatusCheck = koraliaStatusCheck;

function koraliaSchedule() {
	const koralia = C.npc.Koralia;
	if (!koralia) return "nowhere";
		// scene viewer (?)
	if (V.koralia_location_override && V.replayScene) {
		T.koralia_location = V.koralia_location_override;
	}
	// dismissal
	if (C.npc.Koralia.status === "sealed"){
		T.koralia_location = "sealed";
		T.koralia_location_message = "sealed";
		T.karl_location = "shop";
		return T.koralia_location;
	}

	// ModLI permanent activation guard
	if (typeof modLISelected === "function" &&!modLIselcted("Koralia")) {
		T.koralia_location = "nowhere";
		T.koralia_location_message = "away";
		return T.koralia_location;
	}

	// intro guard
	if (koralia.init !==1 ||Array.isArray(V.koraliaSeen)||!V.koraliaSeen.includes("met")) {
		T.koralia_location = "nowhere";
		T.koralia_location_message = "away";
		return T.koralia_location;
	} else {
		const isWeekend = time.weekDay === 1 || time.weekDay === 7;
		const isPierDay = time.weekDay === 3 || time.weekDay === 5;go
		const beachStartHour = isWeekend ? 21 : 22;
		const isBeachTime = time.hour >= beachStartHour || (time.hour <= 2 && time.minute <= 48);

		V.koralia_rescueAvailable = false;

		if (isBeachTime) {
			T.koralia_location = "beach";
			if ((!isWeekend) || (V.pierState >= 2 && !isPierDay)) {
				V.koralia_rescueAvailable = true;
			}
			return "ocean";
		} else if (time.hour = 2) {
			T.koralia_location = "street";
			return "toHome";
		} else if (time.hour < 6) {
			T.koralia_location = "flat";
			return "sleep";
		} else if (time.hour = 6 && ((V.ssshopState >= 4 && time.minute <= 43)||(time.minute <= 30))){
			T.koralia_location = "flat";
			return "flat";
		} else if (time.hour = 6) {
			T.koralia_location = "street";
			return "toShop";
			/* prevent koralia from teleporting across the town. They can do their eldritch shenanigans later */
		} else if (time.hour <= 18) {
			T.koralia_location = "shop";
			return "shop";
		} else if (V.pierState >= 2 && isPierDay) {
			T.koralia_location = "pier";
			return "pier";
		} else {
			T.koralia_location = "dock";
			return "dock";
		}
	}
	if (!["sealed", "nowhere", "shop"].includes(T.koralia_location)) {
	T.koralia_location_message = "absent";
	}
	else if (T.koralia_location = "shop") {
	T.koralia_location_message = "";
	}
}
window.koraliaSchedule = koraliaSchedule;
DefineMacro("koraliaSchedule", koraliaSchedule);