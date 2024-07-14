import { Layer } from 'types/types';
import { CollectionBase } from './collection-base';
import { Matrix4 } from 'math/matrix4';
import { Project } from './project';

class Screen extends CollectionBase<never, Layer> {
	public project: Project;
	public canvas: HTMLCanvasElement;
	public context: WebGLRenderingContext | null;
	public program: WebGLProgram | null;
	public projectionMatrix = new Matrix4();

	private _vertexSource = `
		attribute vec2 aPosition;
		uniform mat4 uProjectionMatrix;
		uniform mat4 uModelViewMatrix;
		varying vec2 texCoords;

		void main(){
			texCoords = (aPosition + 1.0) / 2.0;
			gl_Position = uModelViewMatrix * vec4(aPosition, 0.0, 1.0);
		}
	`;
	private _fragmentSource = `
		precision highp float;
		uniform sampler2D uSampler;
		varying vec2 texCoords;

		void main(){
			vec4 color = texture2D(uSampler, texCoords);
			gl_FragColor = color;
		}
	`;

	public constructor(canvas: HTMLCanvasElement) {
		super();
		this.canvas = canvas;
		this.context = canvas.getContext('webgl');
		this.program = this._createShaderProgram();
		this.projectionMatrix.perspective(Math.PI / 4, canvas.width / canvas.height, 0.1, 100);
	}

	public update() {
		const gl = this.context;
		const program = this.program;
		const { width, height } = this.canvas;

		if (!gl || !program) {
			return this;
		}

		gl.viewport(0, 0, width, height);
		gl.clearColor(0, 0, 0, 1);
		gl.clear(gl.COLOR_BUFFER_BIT);

		gl.useProgram(program);

		const uMatrix = gl.getUniformLocation(program, 'uProjectionMatrix');
		gl.uniformMatrix4fv(uMatrix, false, this.projectionMatrix.get());

		this.children.forEach((layer) => layer.draw());

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

		gl.shaderSource(vertexShader, this._vertexSource);
		gl.shaderSource(fragmentShader, this._fragmentSource);

		gl.compileShader(vertexShader);
		if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
			console.error('Vertex shader compilation error:', gl.getShaderInfoLog(vertexShader));
			gl.deleteShader(vertexShader);
			return null;
		}

		gl.compileShader(fragmentShader);
		if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
			console.error(
				'Fragment shader compilation error:',
				gl.getShaderInfoLog(fragmentShader)
			);
			gl.deleteShader(fragmentShader);
			return null;
		}

		gl.attachShader(program, vertexShader);
		gl.attachShader(program, fragmentShader);

		gl.linkProgram(program);
		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			console.error('Shader program linking error:', gl.getProgramInfoLog(program));
			gl.deleteProgram(program);
			return null;
		}

		gl.validateProgram(program);
		if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
			console.error('Shader program validation error:', gl.getProgramInfoLog(program));
			gl.deleteProgram(program);
			return null;
		}

		return program;
	}

	protected _added(child: Layer) {
		child.initBuffer();
		child.initTexture();
	}
}

export { Screen };
