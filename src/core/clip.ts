import { Effect, Track } from 'types/types';
import { Base } from './base';

abstract class Clip<E extends HTMLElement = HTMLElement, F = Effect> extends Base<Track> {
	public element: E;
	public effects: F[];
	public duration: number;
	public startTime: number;
	public cutStart: number;
	public cutEnd: number;
	public fadeIn: number;
	public fadeOut: number;
	public playbackRate: number;

	public constructor(element: E) {
		super();
		this.element = element;
		this.type = 'clip';
		this._createId();

		element.addEventListener('loadedmetadata', () => {
			// @ts-ignore
			this.duration = Math.ceil(element.duration * 1000);
			this.startTime = 0;
			this.cutStart = 0;
			this.cutEnd = this.duration;
		});
	}
}

export { Clip };
