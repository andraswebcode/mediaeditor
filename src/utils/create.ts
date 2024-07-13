const createVideoElement = (src: string): HTMLVideoElement => {
	const video = document.createElement('video');
	const source = document.createElement('source');

	source.src = src;

	video.appendChild(source);

	return video;
};

const createAudioElement = (src: string): HTMLAudioElement => {
	const audio = document.createElement('audio');
	return audio;
};

const createImageElement = (src: string): HTMLImageElement => {
	const image = document.createElement('img');
	return image;
};

const createCanvasElement = (src: string): HTMLCanvasElement => {
	const canvas = document.createElement('canvas');
	return canvas;
};

const createElement = (
	src: string,
	type: string
): HTMLVideoElement | HTMLAudioElement | HTMLImageElement | HTMLCanvasElement => {
	switch (type) {
		case 'video':
			return createVideoElement(src);
		case 'audio':
			return createAudioElement(src);
		case 'canvas':
			return createCanvasElement(src);
		default:
			return createImageElement(src);
	}
};

export {
	createVideoElement,
	createAudioElement,
	createImageElement,
	createCanvasElement,
	createElement
};
