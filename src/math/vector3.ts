import { Matrix4 } from './matrix4';

class Vector3 {
	public x = 0;
	public y = 0;
	public z = 0;

	public constructor(x = 0, y = 0, z = 0) {
		this.set(x, y, z);
	}

	public set(x: number, y: number, z: number): Vector3 {
		this.x = x;
		this.y = y;
		this.z = z;
		return this;
	}

	public add(v: Vector3): Vector3 {
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		return this;
	}

	public addScalar(scale: number): Vector3 {
		this.x += scale;
		this.y += scale;
		this.z += scale;
		return this;
	}

	public subtract(v: Vector3): Vector3 {
		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
		return this;
	}

	public subtractScalar(scale: number): Vector3 {
		this.x -= scale;
		this.y -= scale;
		this.z -= scale;
		return this;
	}

	public multiply(v: Vector3): Vector3 {
		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;
		return this;
	}

	public multiplyScalar(scale: number): Vector3 {
		this.x *= scale;
		this.y *= scale;
		this.z *= scale;
		return this;
	}

	public divide(v: Vector3): Vector3 {
		this.x /= v.x;
		this.y /= v.y;
		this.z /= v.z;
		return this;
	}

	public divideScalar(scale: number): Vector3 {
		this.x /= scale;
		this.y /= scale;
		this.z /= scale;
		return this;
	}

	public normalize(): Vector3 {
		const length = this.length();

		if (length > 0) {
			this.divideScalar(length);
		}

		return this;
	}

	public cross(v: Vector3): Vector3 {
		const crossX = this.y * v.z - this.z * v.y;
		const crossY = this.z * v.x - this.x * v.z;
		const crossZ = this.x * v.y - this.y * v.x;

		this.x = crossX;
		this.y = crossY;
		this.z = crossZ;

		return this;
	}

	public dot(v: Vector3): number {
		return this.x * v.x + this.y * v.y + this.z * v.z;
	}

	public lerp(v: Vector3, t: number): Vector3 {
		this.x += (v.x - this.x) * t;
		this.y += (v.y - this.y) * t;
		this.z += (v.z - this.z) * t;
		return this;
	}

	public length(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}

	public transform(m: Matrix4): Vector3 {
		const { x, y, z } = this;
		const e = m.get();
		const trX = e[0] * x + e[4] * y + e[8] * z + e[12];
		const trY = e[1] * x + e[5] * y + e[9] * z + e[13];
		const trZ = e[2] * x + e[6] * y + e[10] * z + e[14];
		const w = e[3] * x + e[7] * y + e[11] * z + e[15];

		if (w === 0 || w === 1) {
			return this.set(trX, trY, trZ);
		}

		return this.set(trX / w, trY / w, trZ / w);
	}

	public copy(v: Vector3): Vector3 {
		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
		return this;
	}

	public clone() {
		return new Vector3(this.x, this.y, this.z);
	}
}

export { Vector3 };
