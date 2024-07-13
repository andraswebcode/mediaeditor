const canvas = document.getElementById('canvas');
const screen = new mediaeditor.Screen(canvas);
const timeline = new mediaeditor.Timeline();
const project = new mediaeditor.Project(screen, timeline);

project.import('assets/video.mp4', 'video');
project.import('assets/audio.mp3', 'audio');
