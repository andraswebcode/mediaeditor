import { AudioClip } from 'clip/audio-clip';
import { VideoClip } from 'clip/video-clip';
import { Delay } from 'effect/audio/delay';
import { Equalizer } from 'effect/audio/equalizer';
import { Reverb } from 'effect/audio/reverb';
import { Blur } from 'effect/visual/blur';
import { Brightness } from 'effect/visual/brightness';
import { Contrast } from 'effect/visual/contrast';
import { Grayscale } from 'effect/visual/grayscale';
import { ImageLayer } from 'layer/image-layer';
import { TextLayer } from 'layer/text-layer';
import { VideoLayer } from 'layer/video-layer';
import { AudioTrack } from 'track/audio-track';
import { VideoTrack } from 'track/video-track';

type Clip = AudioClip | VideoClip;

type Track = AudioTrack | VideoTrack;

type AudioEffect = Delay | Reverb | Equalizer;

type VisualEffect = Blur | Brightness | Contrast | Grayscale;

type Effect = AudioEffect | VisualEffect;

type Layer = VideoLayer | ImageLayer | TextLayer;

type ClipSource = string | Blob;

export { Clip, Track, AudioEffect, VisualEffect, Effect, Layer, ClipSource };
