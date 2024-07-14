import { config } from 'congfig/congif';
import { Clip } from 'core/clip';
import { ImageLayer } from 'layer/image-layer';
import { VisualEffect } from 'types/types';

class ImageClip extends Clip<HTMLImageElement, VisualEffect> {
	public layer: ImageLayer;

	public constructor(element: HTMLImageElement) {
		super(element);
		this.layer = new ImageLayer(this);
		this.duration = config.get('imageDuration');
	}
}

export { ImageClip };
