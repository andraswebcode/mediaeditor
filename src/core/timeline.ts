import { Track } from 'types/types';
import { CollectionBase } from './collection-base';

class Timeline extends CollectionBase<never, Track> {
	private _startTime = 0;
	private _currentTime = 0;
	private _playing = false;

	set currentTime(value: number) {
		this._currentTime = value;
		this._update();
	}

	get currentTime() {
		return this._currentTime;
	}

	get playing() {
		return this._playing;
	}

	get duration() {
		const durs = this.children.map((child) => child.duration);
		return Math.max(...durs);
	}

	public constructor() {
		super();
		this._render = this._render.bind(this);
	}

	public play() {
		if (this._playing) {
			return this;
		}

		this._playing = true;
		this._startTime = performance.now() - this._currentTime;
		requestAnimationFrame(this._render);

		return this;
	}

	public pause() {
		this._playing = false;
		return this;
	}

	private _render(timeStamp: number) {
		if (!this._playing) {
			return;
		}

		this._currentTime = timeStamp - this._startTime;
		this._update();

		if (this._currentTime <= this.duration) {
			requestAnimationFrame(this._render);
		} else {
			this._playing = false;
			this._startTime = 0;
			this._currentTime = 0;
		}
	}

	private _update() {
		console.log('update');
	}
}

export { Timeline };
