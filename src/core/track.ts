import { Clip } from 'types/types';
import { CollectionBase } from './collection-base';

abstract class Track extends CollectionBase<Clip> {
	public id: string;
	public name: string;
}

export { Track };
