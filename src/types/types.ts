import { AudioClip } from 'clip/audio-clip';
import { VideoClip } from 'clip/video-clip';
import { AudioTrack } from 'track/audio-track';
import { VideoTrack } from 'track/video-track';

type Clip = AudioClip | VideoClip;

type Track = AudioTrack | VideoTrack;

export { Clip, Track };
