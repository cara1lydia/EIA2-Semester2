var BeachAnimation;
(function (BeachAnimation) {
    class Seagull {
        position;
        speed;
        constructor(_x, _y, _speedx, _speedy) {
            let position = new BeachAnimation.Vector(_x, _y);
            this.position = position;
            let speed = new BeachAnimation.Vector(_speedx, _speedy);
            this.speed = speed;
        }
        draw() {
            BeachAnimation.crc2.save();
            BeachAnimation.crc2.translate(this.position.x, this.position.y);
            BeachAnimation.crc2.beginPath();
            BeachAnimation.crc2.moveTo(0, 10);
            BeachAnimation.crc2.bezierCurveTo(0, 10, 10, -10, 20, 10);
            BeachAnimation.crc2.bezierCurveTo(20, 10, 30, -10, 40, 10);
            BeachAnimation.crc2.strokeStyle = "rgb(0, 0, 0, 0.5";
            BeachAnimation.crc2.stroke();
            BeachAnimation.crc2.restore();
        }
        animate() {
            if (this.position.y > BeachAnimation.crc2.canvas.height) {
                this.speed.y = -this.speed.y;
            }
            if (this.position.y < 0) {
                this.speed.y = Math.abs(this.speed.y);
            }
            if (this.position.x > BeachAnimation.crc2.canvas.width) {
                this.speed.x = -this.speed.x;
            }
            if (this.position.x < 0) {
                this.speed.x = Math.abs(this.speed.x);
            }
            let offset = this.speed;
            this.position.add(offset);
        }
    }
    BeachAnimation.Seagull = Seagull;
})(BeachAnimation || (BeachAnimation = {}));
//# sourceMappingURL=Seagull.js.map