import { Clip } from 'types/types';
import { CollectionBase } from './collection-base';
import { Timeline } from './timeline';

abstract class Track extends CollectionBase<Timeline, Clip> {
	public id: string;
	public name: string;
}

export { Track };
