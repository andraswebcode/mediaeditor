import { CollectionBase } from './collection-base';

abstract class Track extends CollectionBase {
	public id: string;
	public name: string;
	public type: string;
}

export { Track };
