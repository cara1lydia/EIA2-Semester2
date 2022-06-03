var BeachAnimation;
(function (BeachAnimation) {
    class People {
        position;
        speed;
        right;
        constructor(_x, _y, _speedx, _speedy) {
            let position = new BeachAnimation.Vector(_x, _y);
            this.position = position;
            let speed = new BeachAnimation.Vector(_speedx, _speedy);
            this.speed = speed;
            this.right = true;
        }
        draw() {
            BeachAnimation.crc2.translate(this.position.x, this.position.y);
            /** Dress */
            BeachAnimation.crc2.beginPath();
            BeachAnimation.crc2.arc(100, 20, 10, 0, Math.PI * 2);
            BeachAnimation.crc2.closePath();
            BeachAnimation.crc2.strokeStyle = "red";
            BeachAnimation.crc2.fillStyle = "red";
            BeachAnimation.crc2.fill();
            BeachAnimation.crc2.stroke();
            BeachAnimation.crc2.beginPath();
            BeachAnimation.crc2.moveTo(90, 20);
            BeachAnimation.crc2.lineTo(90, 40);
            BeachAnimation.crc2.lineTo(110, 40);
            BeachAnimation.crc2.lineTo(110, 20);
            BeachAnimation.crc2.closePath();
            BeachAnimation.crc2.strokeStyle = "red";
            BeachAnimation.crc2.fillStyle = "red";
            BeachAnimation.crc2.fill();
            BeachAnimation.crc2.stroke();
            /** Head */
            BeachAnimation.crc2.beginPath();
            BeachAnimation.crc2.arc(100, 0, 10, 0, Math.PI * 2);
            BeachAnimation.crc2.closePath();
            BeachAnimation.crc2.fillStyle = "beige";
            BeachAnimation.crc2.strokeStyle = "beige";
            BeachAnimation.crc2.fill();
            BeachAnimation.crc2.stroke();
            /**Arms */
            BeachAnimation.crc2.beginPath();
            BeachAnimation.crc2.moveTo(85, 20);
            BeachAnimation.crc2.lineTo(85, 30);
            BeachAnimation.crc2.lineTo(90, 30);
            BeachAnimation.crc2.lineTo(90, 20);
            BeachAnimation.crc2.closePath();
            BeachAnimation.crc2.fillStyle = "beige";
            BeachAnimation.crc2.strokeStyle = "beige";
            BeachAnimation.crc2.fill();
            BeachAnimation.crc2.stroke();
            BeachAnimation.crc2.beginPath();
            BeachAnimation.crc2.arc(87, 30, 3, 0, Math.PI * 2);
            BeachAnimation.crc2.closePath();
            BeachAnimation.crc2.fillStyle = "beige";
            BeachAnimation.crc2.strokeStyle = "beige";
            BeachAnimation.crc2.fill();
            BeachAnimation.crc2.stroke();
            BeachAnimation.crc2.beginPath();
            BeachAnimation.crc2.moveTo(115, 20);
            BeachAnimation.crc2.lineTo(115, 30);
            BeachAnimation.crc2.lineTo(110, 30);
            BeachAnimation.crc2.lineTo(110, 20);
            BeachAnimation.crc2.closePath();
            BeachAnimation.crc2.fillStyle = "beige";
            BeachAnimation.crc2.strokeStyle = "beige";
            BeachAnimation.crc2.fill();
            BeachAnimation.crc2.stroke();
            BeachAnimation.crc2.beginPath();
            BeachAnimation.crc2.arc(113, 30, 3, 0, Math.PI * 2);
            BeachAnimation.crc2.closePath();
            BeachAnimation.crc2.fillStyle = "beige";
            BeachAnimation.crc2.strokeStyle = "beige";
            BeachAnimation.crc2.fill();
            BeachAnimation.crc2.stroke();
            /** Legs */
            BeachAnimation.crc2.beginPath();
            BeachAnimation.crc2.moveTo(90, 40);
            BeachAnimation.crc2.lineTo(90, 50);
            BeachAnimation.crc2.lineTo(95, 50);
            BeachAnimation.crc2.lineTo(95, 40);
            BeachAnimation.crc2.closePath();
            BeachAnimation.crc2.fillStyle = "beige";
            BeachAnimation.crc2.strokeStyle = "beige";
            BeachAnimation.crc2.fill();
            BeachAnimation.crc2.stroke();
            BeachAnimation.crc2.beginPath();
            BeachAnimation.crc2.moveTo(110, 40);
            BeachAnimation.crc2.lineTo(110, 50);
            BeachAnimation.crc2.lineTo(105, 50);
            BeachAnimation.crc2.lineTo(105, 40);
            BeachAnimation.crc2.closePath();
            BeachAnimation.crc2.fillStyle = "beige";
            BeachAnimation.crc2.strokeStyle = "beige";
            BeachAnimation.crc2.fill();
            BeachAnimation.crc2.stroke();
            BeachAnimation.crc2.restore();
        }
        animate() {
            if (this.position.y > BeachAnimation.crc2.canvas.height) {
                this.speed.y = -this.speed.y;
            }
            if (this.position.y < BeachAnimation.crc2.canvas.height * 0.65) {
                this.speed.y = Math.abs(this.speed.y);
            }
            if (this.position.x > BeachAnimation.crc2.canvas.width) {
                this.speed.x = -this.speed.x;
                this.right = false;
            }
            if (this.position.x < 0) {
                this.speed.x = Math.abs(this.speed.x);
                this.right = true;
            }
            let offset = this.speed;
            this.position.add(offset);
        }
    }
    BeachAnimation.People = People;
})(BeachAnimation || (BeachAnimation = {}));
//# sourceMappingURL=People.js.map