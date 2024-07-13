const createVideoElement = (src = ''): HTMLVideoElement => {
	const video = document.createElement('video');
	const source = document.createElement('source');

	source.src = src;

	video.appendChild(source);

	return video;
};

const createAudioElement = (src = ''): HTMLAudioElement => {
	const audio = document.createElement('audio');
	audio.src = src;
	return audio;
};

const createImageElement = (src = ''): HTMLImageElement => {
	const image = document.createElement('img');
	image.src = src;
	return image;
};

const createCanvasElement = (): HTMLCanvasElement => {
	const canvas = document.createElement('canvas');
	return canvas;
};

const createElement = (
	type: string,
	src?: string
): HTMLVideoElement | HTMLAudioElement | HTMLImageElement | HTMLCanvasElement | null => {
	switch (type) {
		case 'video':
			return createVideoElement(src);
		case 'audio':
			return createAudioElement(src);
		case 'canvas':
			return createCanvasElement();
		case 'image':
			return createImageElement(src);
		default:
			return null;
	}
};

export {
	createVideoElement,
	createAudioElement,
	createImageElement,
	createCanvasElement,
	createElement
};
