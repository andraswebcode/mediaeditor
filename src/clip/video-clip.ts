import { Clip } from 'core/clip';
import { Transformation, VisualEffect } from 'types/types';

class VideoClip extends Clip<VisualEffect> {
	transformation: Transformation = {};
}

export { VideoClip };
