import { Base } from './base';
import { Matrix4 } from 'math/matrix4';
import { Screen } from './screen';
import { Clip } from 'types/types';

abstract class Layer extends Base<Screen> {
	public matrix = new Matrix4();
	public vertices: Float32Array;
	public buffer: WebGLBuffer | null;
	public texture: WebGLTexture | null;
	public aPosition: GLint;
	public uMatrix: WebGLUniformLocation | null;
	public uSampler: WebGLUniformLocation | null;
	public clip: Clip;

	public constructor(clip: Clip) {
		super();
		this.clip = clip;
	}

	public initBuffer() {
		const gl = this.parent.context;
		const program = this.parent.program;

		if (!gl || !program) {
			return this;
		}

		this.vertices = new Float32Array([
			//-0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, -0.5
			-1, 1, 1, 1, 1, -1, -1, 1, 1, -1, -1, -1
		]);

		this.buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.STATIC_DRAW);

		this.aPosition = gl.getAttribLocation(program, 'aPosition');
		this.uMatrix = gl.getUniformLocation(program, 'uModelViewMatrix');

		return this;
	}

	public initTexture() {
		const gl = this.parent.context;
		const program = this.parent.program;

		if (!gl || !program) {
			return this;
		}

		this.texture = gl.createTexture();

		gl.bindTexture(gl.TEXTURE_2D, this.texture);
		gl.texImage2D(
			gl.TEXTURE_2D,
			0,
			gl.RGBA,
			1,
			1,
			0,
			gl.RGBA,
			gl.UNSIGNED_BYTE,
			new Uint8Array([0, 0, 255, 255])
		);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

		this.uSampler = gl.getUniformLocation(program, 'uSampler');
	}

	public draw() {
		const gl = this.parent.context;
		const program = this.parent.program;

		if (!gl || !program) {
			return this;
		}

		gl.useProgram(program);

		gl.uniformMatrix4fv(this.uMatrix, false, this.matrix.get());

		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, this.texture);

		gl.uniform1i(this.uSampler, 0);

		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		gl.enableVertexAttribArray(this.aPosition);
		gl.vertexAttribPointer(this.aPosition, 2, gl.FLOAT, false, 0, 0);

		gl.drawArrays(gl.TRIANGLES, 0, this.vertices.length / 2);

		return this;
	}
}

export { Layer };
