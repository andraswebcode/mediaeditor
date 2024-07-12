import { Transformation } from 'types/types';

/* prettier-ignore */
class Matrix4 {
	private _elements = new Float32Array([
		1, 0, 0, 0,
		0, 1, 0, 0,
		0, 0, 1, 0,
		0, 0, 0, 1
	]);

	public constructor(array?: number[]){
		if (array){
			this.set(array);
		}
	}

	public set(array: number[]): Matrix4 {
		this._elements.set(array);
		return this;
	}

	public get(): Float32Array {
		return this._elements;
	}

	public reset(){
		return this.set([
			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1
		]);
	}

	public multiply(matrix: Matrix4): Matrix4 {
		const a = this._elements;
		const b = matrix.get();
		const result: number[] = [];

		for (let row = 0; row < 4; row++) {
			for (let col = 0; col < 4; col++) {
				result[row * 4 + col] =
					a[row * 4 + 0] * b[0 * 4 + col] +
					a[row * 4 + 1] * b[1 * 4 + col] +
					a[row * 4 + 2] * b[2 * 4 + col] +
					a[row * 4 + 3] * b[3 * 4 + col];
			}
		}

		this._elements.set(result);

		return this;
	}

	public translate(x: number, y: number, z = 1): Matrix4 {
        const translationMatrix = new Matrix4([
            1, 0, 0, x,
            0, 1, 0, y,
            0, 0, 1, z,
            0, 0, 0, 1
        ]);

        return this.multiply(translationMatrix);
    }

	public rotate(x: number, y: number, z = 0): Matrix4 {
		const rotationXMatrix = new Matrix4().rotateX(x);
		const rotationYMatrix = new Matrix4().rotateX(y);
		const rotationZMatrix = new Matrix4().rotateX(z);

		return this
			.multiply(rotationXMatrix)
			.multiply(rotationYMatrix)
			.multiply(rotationZMatrix);
	}

	public rotateX(angle: number): Matrix4 {
		const c = Math.cos(angle);
		const s = Math.sin(angle);
		const rotationMatrix = new Matrix4([
			1, 0,  0, 0,
			0, c, -s, 0,
			0, s,  c, 0,
			0, 0,  0, 1
		]);

		return this.multiply(rotationMatrix);
	}

	public rotateY(angle: number): Matrix4 {
		const c = Math.cos(angle);
		const s = Math.sin(angle);
		const rotationMatrix = new Matrix4([
			 c, 0, s, 0,
			 0, 1, 0, 0,
			-s, 0, c, 0,
			 0, 0, 0, 1
		]);

		return this.multiply(rotationMatrix);
	}

	public rotateZ(angle: number): Matrix4 {
		const c = Math.cos(angle);
		const s = Math.sin(angle);
		const rotationMatrix = new Matrix4([
			c, -s, 0, 0,
			s,  c, 0, 0,
			0,  0, 1, 0,
			0,  0, 0, 1
		]);

		return this.multiply(rotationMatrix);
	}

	public scale(x: number, y: number, z = 1): Matrix4 {
 		const scalingMatrix = new Matrix4([
			x, 0, 0, 0,
			0, y, 0, 0,
 			0, 0, z, 0,
			0, 0, 0, 1
		]);

 		return this.multiply(scalingMatrix);
 	}

	public skew(x: number, y: number, z = 0): Matrix4 {
		const tanX = Math.tan(x);
		const tanY = Math.tan(y);
		const tanZ = Math.tan(z);

		const skewingMatrix = new Matrix4([
			1, tanY, tanZ, 0,
			tanX, 1, tanZ, 0,
			tanX, tanY, 1, 0,
			0, 0, 0, 1
		]);

		return this.multiply(skewingMatrix);
	}

	public invert(): Matrix4 {
		const m = this._elements;
		const result: number[] = [];

		const [
			m00, m01, m02, m03,
			m10, m11, m12, m13,
			m20, m21, m22, m23,
			m30, m31, m32, m33
		] = m;

		const b00 = m00 * m11 - m01 * m10;
		const b01 = m00 * m12 - m02 * m10;
		const b02 = m00 * m13 - m03 * m10;
		const b03 = m01 * m12 - m02 * m11;
		const b04 = m01 * m13 - m03 * m11;
		const b05 = m02 * m13 - m03 * m12;
		const b06 = m20 * m31 - m21 * m30;
		const b07 = m20 * m32 - m22 * m30;
		const b08 = m20 * m33 - m23 * m30;
		const b09 = m21 * m32 - m22 * m31;
		const b10 = m21 * m33 - m23 * m31;
		const b11 = m22 * m33 - m23 * m32;

		let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

		if (!det) {
			this._elements.set([
				0, 0, 0, 0,
				0, 0, 0, 0,
				0, 0, 0, 0,
				0, 0, 0, 0
			]);
		}

		det = 1.0 / det;

		result[0] = (m11 * b11 - m12 * b10 + m13 * b09) * det;
		result[1] = (m02 * b10 - m01 * b11 - m03 * b09) * det;
		result[2] = (m31 * b05 - m32 * b04 + m33 * b03) * det;
		result[3] = (m22 * b04 - m21 * b05 - m23 * b03) * det;
		result[4] = (m12 * b08 - m10 * b11 - m13 * b07) * det;
		result[5] = (m00 * b11 - m02 * b08 + m03 * b07) * det;
		result[6] = (m32 * b02 - m30 * b05 - m33 * b01) * det;
		result[7] = (m20 * b05 - m22 * b02 + m23 * b01) * det;
		result[8] = (m10 * b10 - m11 * b08 + m13 * b06) * det;
		result[9] = (m01 * b08 - m00 * b10 - m03 * b06) * det;
		result[10] = (m30 * b04 - m31 * b02 + m33 * b00) * det;
		result[11] = (m21 * b02 - m20 * b04 - m23 * b00) * det;
		result[12] = (m11 * b07 - m10 * b09 - m12 * b06) * det;
		result[13] = (m00 * b09 - m01 * b07 + m02 * b06) * det;
		result[14] = (m31 * b01 - m30 * b03 - m32 * b00) * det;
		result[15] = (m20 * b03 - m21 * b01 + m22 * b00) * det;

		this._elements.set(result);

		return this;
	}

	public fromOptions(options: Transformation): Matrix4 {
		const {
			translateX = 0, 
			translateY = 0, 
			translateZ = 0,
			angleX = 0, 
			angleY = 0, 
			angleZ = 0, 
			scaleX = 1, 
			scaleY = 1, 
			scaleZ = 1, 
			skewX = 0, 
			skewY = 0, 
			skewZ = 0
		} = options;

		return this
			.reset()
			.translate(translateX, translateY, translateZ)
			.rotate(angleX, angleY, angleZ)
			.skew(skewX, skewY, skewZ)
			.scale(scaleX, scaleY, scaleZ);
	}
}

export { Matrix4 };
