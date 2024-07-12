/* prettier-ignore */

class Matrix4 {
	private _elements = new Float32Array([
		1, 0, 0, 0,
		0, 1, 0, 0,
		0, 0, 1, 0,
		0, 0, 0, 1
	]);

	public setElements(array: number[]): Matrix4 {
		this._elements.set(array);
		return this;
	}

	public getElements(): Float32Array {
		return this._elements;
	}

	public multiply(matrix: Matrix4): Matrix4 {
		const a = this._elements;
		const b = matrix.getElements();
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

	public translate(x: number, y: number, z: number): Matrix4 {
        const translationMatrix = new Matrix4().setElements([
            1, 0, 0, x,
            0, 1, 0, y,
            0, 0, 1, z,
            0, 0, 0, 1
        ]);

        return this.multiply(translationMatrix);
    }

	public rotate(angle: number): Matrix4 {
		const c = Math.cos(angle);
		const s = Math.sin(angle);
		const rotationMatrix = new Matrix4().setElements([
			c, -s, 0, 0,
			s,  c, 0, 0,
			0,  0, 1, 0,
			0,  0, 0, 1
		]);

		return this.multiply(rotationMatrix);
	}

	scale(x: number, y: number, z: number): Matrix4 {
 		const scalingMatrix = new Matrix4().setElements([
			x, 0, 0, 0,
			0, y, 0, 0,
 			0, 0, z, 0,
			0, 0, 0, 1
		]);

 		return this.multiply(scalingMatrix);
 	}
}

export { Matrix4 };
