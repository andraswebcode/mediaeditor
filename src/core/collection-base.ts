import { Base } from './base';

abstract class CollectionBase<
	Parent extends Base,
	Child extends Base = never
> extends Base<Parent> {
	public children: Child[] = [];

	public add(children: Child | Child[]) {
		const _children: Child[] = Array.isArray(children) ? children : [children];

		_children.forEach((child) => {
			this.children.push(child);
			child.set('parent', this);
			this._added(child);
		});

		return this;
	}

	public remove(children: Child | Child[]) {
		return this;
	}

	public getById(id: string) {
		return this.children.find((el) => el.id === id);
	}

	protected _added(child: Child) {}
}

export { CollectionBase };
