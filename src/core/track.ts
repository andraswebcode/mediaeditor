import { Clip } from 'types/types';
import { CollectionBase } from './collection-base';
import { Timeline } from './timeline';

abstract class Track<C extends Clip> extends CollectionBase<Timeline, C> {
	get duration() {
		const ends = this.children.map((clip) => clip.cutEnd - clip.cutStart + clip.startTime);
		return Math.max(...ends);
	}

	public constructor() {
		super();
		this.type = 'track';
		this._createId();
	}
}

export { Track };
