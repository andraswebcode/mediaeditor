abstract class Base<Parent = any> {
	public parent: Parent;
	private _listeners: any = {};

	public on() {
		return this;
	}

	public once() {
		return this;
	}

	public off() {
		return this;
	}

	public trigger(eventName: string, ...args: any) {
		return this;
	}

	public set(key: string | object, value: any) {
		if (typeof key === 'object') {
			for (let name in key) {
				this._set(name, key[name]);
			}
		} else {
			this._set(key, value);
		}

		this.trigger('set', this);

		return this;
	}

	private _set(key: string, value: any) {
		this[key] = value;
	}
}

export { Base };
