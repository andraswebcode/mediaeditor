import { Clip } from 'types/types';

abstract class Visualizer<C extends Clip> {
	public canvas: HTMLCanvasElement;
	public context: CanvasRenderingContext2D | null;
	public clip: C;

	get width() {
		return this.canvas.width;
	}

	get height() {
		return this.canvas.height;
	}

	public constructor(clip: C, canvas: HTMLCanvasElement) {
		this.clip = clip;
		this.canvas = canvas;
		this.context = canvas.getContext('2d');
	}
}

export { Visualizer };
