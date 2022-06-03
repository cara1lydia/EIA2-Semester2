namespace BeachAnimation {
    export class Cloud {

        position: Vector;
        speed: Vector;

        constructor(_x: number, _y: number, _speed: number) {
            
            let position: Vector = new Vector(_x, _y);
            this.position = position;
            let speed: Vector = new Vector(_speed, 0);
            this.speed = speed;
        }

        draw(): void {
            let scale: number = ((crc2.canvas.width * 0.5) / 1000);
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(scale, scale);
            

            crc2.beginPath();
            crc2.moveTo(170, 80);
            crc2.bezierCurveTo(120, 100, 130, 150, 230, 150);
            crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
            crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
            crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
            crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
            crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
            crc2.closePath();
            crc2.lineWidth = 2;
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.restore();
        }

        animate(): void {
            let offset: Vector = this.speed;
            this.position.add(offset);
            
            if (this.position.x > crc2.canvas.width + 50) {
                this.position.set(-150, this.position.y);
            }
            if (this.position.x < - 150) {
                this.position.set(crc2.canvas.width + 50, this.position.y);
            }
        }
    }
}