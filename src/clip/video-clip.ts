import { Clip } from 'core/clip';
import { VideoLayer } from 'layer/video-layer';
import { VisualEffect } from 'types/types';

class VideoClip extends Clip<HTMLVideoElement, VisualEffect> {
	public layer: VideoLayer;

	public constructor(element: HTMLVideoElement, buffer: ArrayBuffer) {
		super(element, buffer);
		this.layer = new VideoLayer(this);
		element.addEventListener('loadedmetadata', this._onLoadedMetadata);
	}
}

export { VideoClip };
