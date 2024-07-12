import { AudioClip } from 'clip/audio-clip';
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
import { VideoTrack } from 'track/video-track';

type Clip = AudioClip | VideoClip;

type Track = AudioTrack | VideoTrack;

type AudioEffect = DelayEffect | ReverbEffect | EqualizerEffect;

type VisualEffect = BlurEffect | BrightnessEffect | ContrastEffect | GrayscaleEffect;

type Effect = AudioEffect | VisualEffect;

type Layer = VideoLayer | ImageLayer | TextLayer;

type ClipSource = string | Blob;

export { Clip, Track, AudioEffect, VisualEffect, Effect, Layer, ClipSource };
