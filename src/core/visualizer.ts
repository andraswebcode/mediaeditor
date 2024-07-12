import { Clip } from 'types/types';

abstract class Visualizer {
	public canvas: HTMLCanvasElement;
	public context: CanvasRenderingContext2D | null;
	public clip: Clip;
	public width: number;
	public height: number;

	public constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.context = canvas.getContext('2d');
	}
}

export { Visualizer };
