import { Base } from './base';

class CollectionBase<Parent extends Base, Child extends Base = never> extends Base<Parent> {
	public children: Child[] = [];

	add(children: Child) {
		const _children: Child[] = Array.isArray(children) ? children : [children];

		_children.forEach((child) => {
			this.children.push(child);
			child.set('parent', this);
		});

		return this;
	}

	remove(children: Child) {
		return this;
	}
}

export { CollectionBase };
