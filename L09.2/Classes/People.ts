namespace BeachAnimation {
    export class People {

        position: Vector;
        speed: Vector;
        right: boolean;



        constructor(_x: number, _y: number, _speedx: number, _speedy: number) {
            let position: Vector = new Vector(_x, _y);
            this.position = position;
            let speed: Vector = new Vector(_speedx, _speedy);
            this.speed = speed;
            this.right = true;
        }

        draw(): void {

            crc2.translate(this.position.x, this.position.y);

            /** Dress */
            crc2.beginPath();
            crc2.arc(100, 20, 10, 0, Math.PI * 2);
            crc2.closePath();
            crc2.strokeStyle = "red";
            crc2.fillStyle = "red";
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(90, 20);
            crc2.lineTo(90, 40);
            crc2.lineTo(110, 40);
            crc2.lineTo(110, 20);
            crc2.closePath();
            crc2.strokeStyle = "red";
            crc2.fillStyle = "red";
            crc2.fill();
            crc2.stroke();

            /** Head */
            crc2.beginPath();
            crc2.arc(100, 0, 10, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fillStyle = "beige";
            crc2.strokeStyle = "beige";
            crc2.fill();
            crc2.stroke();

            /**Arms */
            crc2.beginPath();
            crc2.moveTo(85, 20);
            crc2.lineTo(85, 30);
            crc2.lineTo(90, 30);
            crc2.lineTo(90, 20);
            crc2.closePath();
            crc2.fillStyle = "beige";
            crc2.strokeStyle = "beige";
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.arc(87, 30, 3, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fillStyle = "beige";
            crc2.strokeStyle = "beige";
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(115, 20);
            crc2.lineTo(115, 30);
            crc2.lineTo(110, 30);
            crc2.lineTo(110, 20);
            crc2.closePath();
            crc2.fillStyle = "beige";
            crc2.strokeStyle = "beige";
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.arc(113, 30, 3, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fillStyle = "beige";
            crc2.strokeStyle = "beige";
            crc2.fill();
            crc2.stroke();

            /** Legs */
            crc2.beginPath();
            crc2.moveTo(90, 40);
            crc2.lineTo(90, 50);
            crc2.lineTo(95, 50);
            crc2.lineTo(95, 40);
            crc2.closePath();
            crc2.fillStyle = "beige";
            crc2.strokeStyle = "beige";
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(110, 40);
            crc2.lineTo(110, 50);
            crc2.lineTo(105, 50);
            crc2.lineTo(105, 40);
            crc2.closePath();
            crc2.fillStyle = "beige";
            crc2.strokeStyle = "beige";
            crc2.fill();
            crc2.stroke();

            crc2.restore();

        }

        animate(): void {
            if (this.position.y > crc2.canvas.height) {
                this.speed.y = -this.speed.y;
            }
            if (this.position.y < crc2.canvas.height * 0.65 ) {
                this.speed.y = Math.abs(this.speed.y);
            }
            if (this.position.x > crc2.canvas.width) {
                this.speed.x = -this.speed.x;
                this.right = false;
            }
            if (this.position.x < 0) {
                this.speed.x = Math.abs(this.speed.x);
                this.right = true;
            }
            let offset: Vector = this.speed;
            this.position.add(offset);
        }
    }
}