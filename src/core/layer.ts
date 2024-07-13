import { Base } from './base';
import { Matrix4 } from 'math/matrix4';
import { Screen } from './screen';
import { VideoClip } from 'clip/video-clip';

abstract class Layer extends Base<Screen> {
	public matrix = new Matrix4();
	public vertices: Float32Array;
	public buffer: WebGLBuffer | null;
	public aPosition: GLint;
	public clip: VideoClip;

	public constructor(clip: VideoClip) {
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

		return this;
	}

	public draw() {
		const gl = this.parent.context;
		const program = this.parent.program;

		if (!gl || !program) {
			return this;
		}

		gl.useProgram(program);

		const uMatrix = gl.getUniformLocation(program, 'uModelViewMatrix');
		gl.uniformMatrix4fv(uMatrix, false, this.matrix.get());

		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		gl.enableVertexAttribArray(this.aPosition);
		gl.vertexAttribPointer(this.aPosition, 2, gl.FLOAT, false, 0, 0);

		gl.drawArrays(gl.TRIANGLES, 0, this.vertices.length / 2);

		return this;
	}
}

export { Layer };
