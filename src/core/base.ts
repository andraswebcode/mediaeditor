abstract class Base {
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

	public set() {
		this.trigger('set', this);
		return this;
	}
}

export { Base };
