import { AudioClip } from 'clip/audio-clip';
import { ImageClip } from 'clip/image-clip';
import { VideoClip } from 'clip/video-clip';
import { DelayEffect } from 'effect/audio/delay-effect';
import { EqualizerEffect } from 'effect/audio/equalizer-effect';
import { ReverbEffect } from 'effect/audio/reverb-effect';
import { BlurEffect } from 'effect/visual/blur-effect';
import { BrightnessEffect } from 'effect/visual/brightness-effect';
import { ContrastEffect } from 'effect/visual/contrast-effect';
import { GrayscaleEffect } from 'effect/visual/grayscale-effect';
import { ImageLayer } from 'layer/image-layer';
import { TextLayer } from 'layer/text-layer';
import { VideoLayer } from 'layer/video-layer';
import { AudioTrack } from 'track/audio-track';
import { VisualTrack } from 'track/visual-track';

type Clip = AudioClip | VideoClip | ImageClip;

type Track = AudioTrack | VisualTrack;

type AudioEffect = DelayEffect | ReverbEffect | EqualizerEffect;

type VisualEffect = BlurEffect | BrightnessEffect | ContrastEffect | GrayscaleEffect;

type Effect = AudioEffect | VisualEffect;

type Layer = VideoLayer | ImageLayer | TextLayer;

type Transformation = {
	translateX?: number;
	translateY?: number;
	translateZ?: number;
	angleX?: number;
	angleY?: number;
	angleZ?: number;
	scaleX?: number;
	scaleY?: number;
	scaleZ?: number;
	skewX?: number;
	skewY?: number;
	skewZ?: number;
};

type ImageMimeType =
	| 'image/jpeg'
	| 'image/png'
	| 'image/gif'
	| 'image/webp'
	| 'image/svg+xml'
	| 'image/bmp'
	| 'image/tiff'
	| 'image/x-icon';

type VideoMimeType =
	| 'video/mp4'
	| 'video/webm'
	| 'video/ogg'
	| 'video/x-msvideo'
	| 'video/mpeg'
	| 'video/quicktime';

type AudioMimeType =
	| 'audio/midi'
	| 'audio/mpeg'
	| 'audio/webm'
	| 'audio/ogg'
	| 'audio/wav'
	| 'audio/aac'
	| 'audio/flac';

type MimeType = ImageMimeType | VideoMimeType | AudioMimeType;

type MediaType = 'video' | 'image' | 'audio';

export {
	Clip,
	Track,
	AudioEffect,
	VisualEffect,
	Effect,
	Layer,
	Transformation,
	MimeType,
	MediaType
};
