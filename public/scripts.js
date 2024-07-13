const canvas = document.getElementById('canvas');
const screen = new mediaeditor.Screen(canvas);
const timeline = new mediaeditor.Timeline();
const project = new mediaeditor.Project(screen, timeline);
const layer = new mediaeditor.VideoLayer();

// screen.add(layer).update();
