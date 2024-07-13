import { Effect, Track } from 'types/types';
import { Base } from './base';

abstract class Clip<E = HTMLElement, F = Effect> extends Base<Track> {
	public type: string;
	public startTime: number;
	public endTime: number;
	public source: string;
	public element: E;
	public blob: Blob;
	public effects: F[];
	public fadeIn: number;
	public fadeOut: number;
	public playbackRate: number;

	public constructor(element: E) {
		super();
		this.element = element;
		this.type = 'clip';
		this._createId();
	}
}

export { Clip };
