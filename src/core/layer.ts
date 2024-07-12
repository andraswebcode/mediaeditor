import { Base } from './base';
import { Matrix4 } from 'math/matrix4';
import { Screen } from './screen';

class Layer extends Base<Screen> {
	public matrix = new Matrix4();

	public constructor() {
		super();
	}

	public draw() {
		const gl = this.parent.context;
	}
}

export { Layer };
