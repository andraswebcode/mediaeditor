import { Base } from './base';

abstract class Clip extends Base {
	public id: string;
	public name: string;
	public startTime: number;
	public endTime: number;
	public source: string | Blob;
	public effects: any[];
	public fadeIn: number;
	public fadeOut: number;
	public playbackRate: number;
}

export { Clip };
