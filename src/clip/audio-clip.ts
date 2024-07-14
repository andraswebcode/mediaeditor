import { Clip } from 'core/clip';
import { AudioEffect } from 'types/types';

class AudioClip extends Clip<HTMLAudioElement, AudioEffect> {
	constructor(element: HTMLAudioElement) {
		super(element);
		element.addEventListener('loadedmetadata', this._onLoadedMetadata);
	}
}

export { AudioClip };
