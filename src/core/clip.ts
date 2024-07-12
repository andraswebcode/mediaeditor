import { ClipSource, Effect, Track } from 'types/types';
import { Base } from './base';

abstract class Clip<E = Effect> extends Base<Track> {
	public id: string;
	public name: string;
	public startTime: number;
	public endTime: number;
	public source: ClipSource;
	public effects: E[];
	public fadeIn: number;
	public fadeOut: number;
	public playbackRate: number;
}

export { Clip };
