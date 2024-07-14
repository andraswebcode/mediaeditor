const canvas = document.getElementById('screen');
const screen = new mediaeditor.Screen(canvas);
const timeline = new mediaeditor.Timeline();
const project = new mediaeditor.Project(screen, timeline);

project.import('assets/video.mp4', 'video');
project.import('assets/audio.mp3', 'audio');
// project.import('assets/image.jpg', 'image');

const audioClip = timeline.childAt(1).firstChild();
const waveCanvas = document.getElementById('wave');
const visualizer = new mediaeditor.WaveformVisualizer(audioClip, waveCanvas);
