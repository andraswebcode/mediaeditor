type ConfigKey = 'imageDuration';
type ConfigObject = {
	[key in ConfigKey]: any;
};

const _config: ConfigObject = {
	imageDuration: 1000
};

const config = {
	get(key: ConfigKey) {
		return _config[key];
	},
	set(options: Partial<ConfigObject>) {
		for (let key in options) {
			_config[key] = options[key];
		}
	}
};

export { config };
