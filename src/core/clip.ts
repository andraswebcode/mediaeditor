import { ClipSource, Effect } from 'types/types';
import { Base } from './base';

abstract class Clip extends Base {
	public id: string;
	public name: string;
	public startTime: number;
	public endTime: number;
	public source: ClipSource;
	public effects: Effect[];
	public fadeIn: number;
	public fadeOut: number;
	public playbackRate: number;
}

export { Clip };
