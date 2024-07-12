import { Base } from './base';
import { Matrix4 } from 'math/matrix4';
import { Screen } from './screen';
import { VideoClip } from 'clip/video-clip';

class Layer extends Base<Screen> {
	public matrix = new Matrix4();
	public clip: VideoClip;

	public constructor(clip: VideoClip) {
		super();
		this.clip = clip;
	}

	public draw() {
		const gl = this.parent.context;
	}
}

export { Layer };
