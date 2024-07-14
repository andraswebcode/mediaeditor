import { Clip } from 'core/clip';
import { AudioEffect } from 'types/types';

class AudioClip extends Clip<HTMLAudioElement, AudioEffect> {
	constructor(element: HTMLAudioElement, buffer: ArrayBuffer) {
		super(element, buffer);
		element.addEventListener('loadedmetadata', this._onLoadedMetadata);
	}
}

export { AudioClip };
