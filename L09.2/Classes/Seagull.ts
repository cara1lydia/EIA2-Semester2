namespace BeachAnimation {
    export class Seagull {

        position: Vector;
        speed: Vector;

        constructor(_x: number, _y: number, _speedx: number, _speedy: number) {

            let position: Vector = new Vector(_x, _y);
            this.position = position;
            let speed: Vector = new Vector(_speedx, _speedy);
            this.speed = speed;
        }

        draw(): void {

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.beginPath();
            crc2.moveTo(0, 10);
            crc2.bezierCurveTo(0, 10, 10, -10, 20, 10);
            crc2.bezierCurveTo(20, 10, 30, -10, 40, 10);
            crc2.strokeStyle = "rgb(0, 0, 0, 0.5";
            crc2.stroke();
            crc2.restore();
        }

        animate(): void {
            if (this.position.y > crc2.canvas.height) {
                this.speed.y = -this.speed.y;
            }
            if (this.position.y < 0) {
                this.speed.y = Math.abs(this.speed.y);
            }
            if (this.position.x > crc2.canvas.width) {
                this.speed.x = -this.speed.x;
            }
            if (this.position.x < 0) {
                this.speed.x = Math.abs(this.speed.x);
            }
            let offset: Vector = this.speed;
            this.position.add(offset);
        }
    }
}
