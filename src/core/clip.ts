import { Effect, Track } from 'types/types';
import { Base } from './base';

abstract class Clip<E = HTMLElement, F = Effect> extends Base<Track> {
	public element: E;
	public effects: F[];
	public cutStart: number;
	public cutEnd: number;
	public startTime: number;
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
