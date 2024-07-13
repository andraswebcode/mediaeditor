import { ImageClip } from 'clip/image-clip';
import { VideoClip } from 'clip/video-clip';
import { Track } from 'core/track';

class VisualTrack extends Track<ImageClip | VideoClip> {}

export { VisualTrack };
