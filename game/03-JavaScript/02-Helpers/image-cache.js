const ImageCache = (() => {
	const cacheEntries = new Map();

	function getCandidates(src) {
		if (window.ImagePack && typeof window.ImagePack.getCandidates === "function") {
			return window.ImagePack.getCandidates(src);
		}
		return [src];
	}

	function getCacheKey(src) {
		if (window.ImagePack && typeof window.ImagePack.getCacheKey === "function") {
			return window.ImagePack.getCacheKey(src);
		}
		return src;
	}

	function getOrCreate(src) {
		if (!src) {
			throw new Error("ImageCache: src must be a non empty string.");
		}

		const cacheKey = getCacheKey(src);
		const existing = cacheEntries.get(cacheKey);
		if (existing) {
			return existing.promise;
		}

		const candidates = getCandidates(src);
		let candidateIndex = 0;
		let resolvePromise;
		let rejectPromise;
		const promise = new Promise((resolve, reject) => {
			resolvePromise = resolve;
			rejectPromise = reject;
		});

		const image = new Image();
		const cacheEntry = { image, promise };
		cacheEntries.set(cacheKey, cacheEntry);

		image.onload = () => resolvePromise(image);
		image.onerror = () => {
			candidateIndex++;
			if (candidateIndex < candidates.length) {
				image.src = candidates[candidateIndex];
			} else {
				cacheEntries.delete(cacheKey);
				rejectPromise(new Error(`Could not load image at path ${src}`));
			}
		};
		image.src = candidates[candidateIndex];

		return cacheEntry.promise;
	}

	return {
		clear: () => cacheEntries.clear(),
		getOrCreate,
	};
})();

window.ImageCache = ImageCache;
