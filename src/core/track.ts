import { Base } from './base';

abstract class Track extends Base {
	public id: string;
	public name: string;
	public type: string;
	public clips: any;
}

export { Track };
