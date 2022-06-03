var BeachAnimation;
(function (BeachAnimation) {
    class Cloud {
        position;
        speed;
        constructor(_x, _y, _speed) {
            let position = new BeachAnimation.Vector(_x, _y);
            this.position = position;
            let speed = new BeachAnimation.Vector(_speed, 0);
            this.speed = speed;
        }
        draw() {
            let scale = ((BeachAnimation.crc2.canvas.width * 0.5) / 1000);
            BeachAnimation.crc2.save();
            BeachAnimation.crc2.translate(this.position.x, this.position.y);
            BeachAnimation.crc2.scale(scale, scale);
            BeachAnimation.crc2.beginPath();
            BeachAnimation.crc2.moveTo(170, 80);
            BeachAnimation.crc2.bezierCurveTo(120, 100, 130, 150, 230, 150);
            BeachAnimation.crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
            BeachAnimation.crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
            BeachAnimation.crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
            BeachAnimation.crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
            BeachAnimation.crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
            BeachAnimation.crc2.closePath();
            BeachAnimation.crc2.lineWidth = 2;
            BeachAnimation.crc2.fillStyle = "white";
            BeachAnimation.crc2.fill();
            BeachAnimation.crc2.strokeStyle = "white";
            BeachAnimation.crc2.stroke();
            BeachAnimation.crc2.restore();
        }
        animate() {
            let offset = this.speed;
            this.position.add(offset);
            if (this.position.x > BeachAnimation.crc2.canvas.width + 50) {
                this.position.set(-150, this.position.y);
            }
            if (this.position.x < -150) {
                this.position.set(BeachAnimation.crc2.canvas.width + 50, this.position.y);
            }
        }
    }
    BeachAnimation.Cloud = Cloud;
})(BeachAnimation || (BeachAnimation = {}));
//# sourceMappingURL=Cloud.js.map