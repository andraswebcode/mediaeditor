import { Layer } from 'types/types';
import { CollectionBase } from './collection-base';

class Screen extends CollectionBase<never, Layer> {
	public canvas: HTMLCanvasElement;
	public context: WebGLRenderingContext | null;
	public program: WebGLProgram | null;

	public constructor(canvas: HTMLCanvasElement) {
		super();
		this.canvas = canvas;
		this.context = canvas.getContext('webgl');
		this.program = this._createShaderProgram();
	}

	public update() {
		const gl = this.context;
		const { width, height } = this.canvas;

		if (!gl) {
			return this;
		}

		gl.viewport(0, 0, width, height);
		gl.clearColor(0, 0, 0, 1);
		gl.clear(gl.COLOR_BUFFER_BIT);

		gl.useProgram(this.program);

		return this;
	}

	private _createShaderProgram(): WebGLProgram | null {
		const gl = this.context;

		if (!gl) {
			return null;
		}

		const program = gl.createProgram();
		const vertexShader = gl.createShader(gl.VERTEX_SHADER);
		const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

		if (!program || !vertexShader || !fragmentShader) {
			return null;
		}

		gl.shaderSource(vertexShader, this._getVertexSource());
		gl.shaderSource(fragmentShader, this._getFragmentSource());

		gl.compileShader(vertexShader);
		gl.compileShader(fragmentShader);

		if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
			console.log(gl.getShaderInfoLog(vertexShader));
		}
		if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
			console.log(gl.getShaderInfoLog(fragmentShader));
		}

		gl.attachShader(program, vertexShader);
		gl.attachShader(program, fragmentShader);

		gl.linkProgram(program);

		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			console.log(gl.getProgramInfoLog(program));
		}

		this.update();

		return program;
	}

	private _getVertexSource() {
		return `
			attribute vec4 aPos;
			void main(){
				gl_Position = aPos;
			}
		`;
	}

	private _getFragmentSource() {
		return `
			void main(){
				gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
			}
		`;
	}
}

export { Screen };
