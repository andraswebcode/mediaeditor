import { Track } from 'types/types';
import { CollectionBase } from './collection-base';

class Timeline extends CollectionBase<never, Track> {
	private _currentTime: number;

	set currentTime(value: number) {
		this._currentTime = value;
	}

	get currentTime() {
		return this._currentTime;
	}

	public play() {
		return this;
	}

	public pause() {
		return this;
	}
}

export { Timeline };
