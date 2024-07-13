import { createElement } from 'utils/create';
import { Base } from './base';
import { Screen } from './screen';
import { Timeline } from './timeline';
import { VideoClip } from 'clip/video-clip';
import { ImageClip } from 'clip/image-clip';
import { AudioClip } from 'clip/audio-clip';
import { AudioTrack } from 'track/audio-track';
import { VisualTrack } from 'track/visual-track';

class Project extends Base {
	public screen: Screen;
	public timeline: Timeline;

	public constructor(screen: Screen, timeline: Timeline) {
		super();
		this.screen = screen;
		this.timeline = timeline;
	}

	public import(src: string, type: string, trackId?: string) {
		fetch(src)
			.then((response) => response.blob())
			.then((blob) => this._createClip(src, type, blob, trackId));
	}

	public export() {}

	private _createClip(src: string, type: string, blob: Blob, trackId?: string) {
		const element = createElement(src, type);
		const track = !!trackId && this.timeline.getById(trackId);
		let clip: any = null;

		switch (type) {
			case 'video':
				clip = new VideoClip(element as HTMLVideoElement);
				break;
			case 'image':
				clip = new ImageClip(element as HTMLImageElement);
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
}

export { Project };
