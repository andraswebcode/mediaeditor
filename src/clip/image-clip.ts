import { Clip } from 'core/clip';
import { Transformation, VisualEffect } from 'types/types';

class ImageClip extends Clip<HTMLImageElement, VisualEffect> {
	transformation: Transformation = {};
}

export { ImageClip };
