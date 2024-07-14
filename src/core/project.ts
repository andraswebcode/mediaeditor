import { createElement } from 'utils/create';
import { Base } from './base';
import { Screen } from './screen';
import { Timeline } from './timeline';
import { VideoClip } from 'clip/video-clip';
import { ImageClip } from 'clip/image-clip';
import { AudioClip } from 'clip/audio-clip';
import { AudioTrack } from 'track/audio-track';
import { VisualTrack } from 'track/visual-track';
import { MediaType } from 'types/types';

class Project extends Base {
	public screen: Screen;
	public timeline: Timeline;

	public constructor(screen: Screen, timeline: Timeline) {
		super();
		screen.project = this;
		timeline.project = this;
		this.screen = screen;
		this.timeline = timeline;
	}

	public import(src: string, type: MediaType, trackId?: string) {
		const element = createElement(type, src);
		const track = !!trackId && this.timeline.getById(trackId);
		let clip: any = null;

		switch (type) {
			case 'video':
				clip = new VideoClip(element as HTMLVideoElement);
				this.screen.add(clip.layer);
				break;
			case 'image':
				clip = new ImageClip(element as HTMLImageElement);
				this.screen.add(clip.layer);
				break;
			case 'audio':
				clip = new AudioClip(element as HTMLAudioElement);
				break;
			default:
				break;
		}

		if (!clip) {
			console.warn(`Type: ${type} is not a valid media type.`);
			return;
		}

		if (track) {
			track.add(clip);
		} else {
			const newTrack = type === 'audio' ? new AudioTrack() : new VisualTrack();
			newTrack.add(clip);
			this.timeline.add(newTrack);
		}
	}

	public export() {}
}

export { Project };
