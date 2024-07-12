import { Base } from './base';
import { Screen } from './screen';
import { Timeline } from './timeline';

class Project extends Base {
	public screen: Screen;
	public timeline: Timeline;

	public constructor(screen: Screen, timeline: Timeline) {
		super();
		this.screen = screen;
		this.timeline = timeline;
	}

	public import() {}

	public export() {}
}

export { Project };
