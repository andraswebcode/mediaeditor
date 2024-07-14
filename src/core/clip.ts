import { Effect, Track } from 'types/types';
import { Base } from './base';

abstract class Clip<E extends HTMLElement = HTMLElement, F = Effect> extends Base<Track> {
	public element: E;
	public effects: F[] = [];
	public duration = 0;
	public startTime = 0;
	public cutStart = 0;
	public cutEnd = 0;
	public fadeIn = 0;
	public fadeOut = 0;
	public playbackRate = 1;

	public constructor(element: E) {
		super();
		this.element = element;
		this.type = 'clip';
		this._createId();
		this._onLoadedMetadata = this._onLoadedMetadata.bind(this);
	}

	protected _onLoadedMetadata() {
		// @ts-ignore
		this.duration = Math.ceil(this.element.duration * 1000);
		this.cutEnd = this.duration;
	}
}

export { Clip };
