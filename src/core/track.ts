import { Clip } from 'types/types';
import { CollectionBase } from './collection-base';
import { Timeline } from './timeline';

abstract class Track<C extends Clip> extends CollectionBase<Timeline, C> {
	public constructor() {
		super();
		this.type = 'track';
		this._createId();
	}
}

export { Track };
