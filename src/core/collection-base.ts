import { Base } from './base';

abstract class CollectionBase<
	Parent extends Base,
	Child extends Base = never
> extends Base<Parent> {
	public children: Child[] = [];

	get childrenLength() {
		return this.children.length;
	}

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

	public childAt(index: number) {
		return this.children[index];
	}

	public firstChild() {
		return this.children[0];
	}

	public lastChild() {
		return this.children[this.childrenLength - 1];
	}

	public getById(id: string) {
		return this.children.find((el) => el.id === id);
	}

	public reset() {
		this.children = [];
		return this;
	}

	public moveChildTo(child: Child, index: number) {
		const fromIndex = this.children.indexOf(child);

		if (fromIndex !== -1) {
			this.children.splice(fromIndex, 1);
			this.children.splice(index, 0, child);
		}

		return this;
	}

	public moveChildUp(child: Child) {
		const fromIndex = this.children.indexOf(child);
		return this.moveChildTo(child, fromIndex + 1);
	}

	public moveChildDown(child: Child) {
		const fromIndex = this.children.indexOf(child);
		return this.moveChildTo(child, fromIndex - 1);
	}

	protected _added(child: Child) {}
}

export { CollectionBase };
