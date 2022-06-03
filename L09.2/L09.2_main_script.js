/**
    * Aufgabe: L09.2 Strand Animation
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 27.05.2022
    * Quellen: Jason Hühne
    */
var BeachAnimation;
(function (BeachAnimation) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        BeachAnimation.crc2 = canvas.getContext("2d");
        let peopleA = [];
        let cloudA = [];
        let seagullA = [];
        BeachAnimation.crc2.canvas.width = window.innerWidth * 0.7;
        BeachAnimation.crc2.canvas.height = window.innerHeight * 0.8;
        drawBackground(canvas.width, canvas.height);
        drawSun(BeachAnimation.crc2.canvas.width * 0.1, BeachAnimation.crc2.canvas.height * 0.2);
        drawWater();
        drawSand(canvas.width, -0.25 * canvas.height);
        drawRocks(canvas.width * -0.1, canvas.height * 0.8, 50, 150);
        objects();
        let imgData = BeachAnimation.crc2.getImageData(0, 0, BeachAnimation.crc2.canvas.width, BeachAnimation.crc2.canvas.height);
        function objects() {
            drawCloud(BeachAnimation.crc2.canvas.width * 0.3, BeachAnimation.crc2.canvas.height * -0.2, -0.5);
            drawCloud(BeachAnimation.crc2.canvas.width * 0.6, BeachAnimation.crc2.canvas.height * -0.05, -0.3);
            drawCloud(BeachAnimation.crc2.canvas.width * -0.1, BeachAnimation.crc2.canvas.height * -0.1, 0.6);
            drawCloud(BeachAnimation.crc2.canvas.width * 0.1, BeachAnimation.crc2.canvas.height * 0.1, 0.4);
            drawSeagull(BeachAnimation.crc2.canvas.width * 0.2, BeachAnimation.crc2.canvas.height * -0.1, 5, 5);
            drawSeagull(BeachAnimation.crc2.canvas.width * 0.5, BeachAnimation.crc2.canvas.height * 0.1, 10, 10);
            drawSeagull(BeachAnimation.crc2.canvas.width * 0.7, BeachAnimation.crc2.canvas.height * -0.2, 20, 20);
            for (let i = 0; i < 10; i++) {
                drawPeople(BeachAnimation.crc2.canvas.width * Math.random(), BeachAnimation.crc2.canvas.height * 0.2 + Math.random() * BeachAnimation.crc2.canvas.height * 0.2, Math.random() * 5, Math.random() * 5);
            }
            requestAnimationFrame(drawScene);
            function drawScene() {
                BeachAnimation.crc2.clearRect(0, 0, canvas.width, canvas.height);
                BeachAnimation.crc2.putImageData(imgData, 0, 0);
                for (let i = 0; i < cloudA.length; i++) {
                    cloudA[i].animate();
                    cloudA[i].draw();
                }
                for (let i = 0; i < seagullA.length; i++) {
                    seagullA[i].animate();
                    seagullA[i].draw();
                }
                for (let i = 0; i < peopleA.length; i++) {
                    peopleA[i].animate();
                    peopleA[i].draw();
                }
                requestAnimationFrame(drawScene);
            }
        }
        function drawBackground(_x, _y) {
            let canvas = document.querySelector("canvas");
            let crc2 = canvas.getContext("2d");
            let gradient = crc2.createLinearGradient(0, 0, 0, 600);
            gradient.addColorStop(0, "#8aa4a8");
            gradient.addColorStop(0.3, "#ff8330");
            gradient.addColorStop(0.4, "#ffdd57");
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, _x, _y);
        }
        function drawWater() {
            let canvas = document.querySelector("canvas");
            let crc2 = canvas.getContext("2d");
            let gradient = crc2.createLinearGradient(0, 0, 0, 500);
            gradient.addColorStop(0.2, "#ffdd57");
            gradient.addColorStop(0.5, "#4256bd");
            gradient.addColorStop(0.8, "#4296bd");
            crc2.fillStyle = gradient;
            crc2.fillRect(-0.1 * crc2.canvas.width, crc2.canvas.height * 0.2, crc2.canvas.width, crc2.canvas.height * 0.6);
        }
        function drawSun(_x, _y) {
            let canvas = document.querySelector("canvas");
            let crc2 = canvas.getContext("2d");
            crc2.translate(_x, _y);
            crc2.fillStyle = "#ffdd57";
            crc2.arc(100, 120, 80, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }
        function drawSand(_x, _y) {
            let canvas = document.querySelector("canvas");
            let crc2 = canvas.getContext("2d");
            let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0.5, "#ffe0a1");
            gradient.addColorStop(0.7, "#e3bf78");
            gradient.addColorStop(0.9, "#d1a95a");
            gradient.addColorStop(1.0, "#9e7f41");
            crc2.beginPath();
            crc2.strokeStyle = gradient;
            crc2.fillStyle = gradient;
            crc2.moveTo(_x, _y + 0.6 * crc2.canvas.height);
            crc2.lineTo(_x + crc2.canvas.width, _y + crc2.canvas.height);
            crc2.lineTo(_x + crc2.canvas.width, _y + crc2.canvas.height);
            crc2.lineTo(_x - crc2.canvas.width, _y + crc2.canvas.height);
            crc2.closePath();
            crc2.save();
            crc2.translate(_x, _y);
            crc2.stroke();
            crc2.fill();
            crc2.restore();
        }
        function drawRocks(_x, _y, _min, _max) {
            let stepMin = 20;
            let stepMax = 50;
            let x = 0;
            BeachAnimation.crc2.save();
            BeachAnimation.crc2.translate(_x, _y);
            BeachAnimation.crc2.beginPath();
            BeachAnimation.crc2.moveTo(0, 0);
            BeachAnimation.crc2.lineTo(0, -_max);
            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y = -_min - Math.random() * (_max - _min);
                BeachAnimation.crc2.lineTo(x, y);
            } while (x < BeachAnimation.crc2.canvas.width);
            BeachAnimation.crc2.lineTo(x, 0);
            BeachAnimation.crc2.closePath();
            let gradient = BeachAnimation.crc2.createLinearGradient(0, 0, 0, -_max);
            gradient.addColorStop(0, "#331b0b");
            gradient.addColorStop(0.7, "#82461e");
            BeachAnimation.crc2.fillStyle = gradient;
            BeachAnimation.crc2.fill();
            BeachAnimation.crc2.restore();
        }
        function drawSeagull(_x, _y, _speedx, _speedy) {
            let seagull = new BeachAnimation.Seagull(_x, _y, _speedx, _speedy);
            seagullA.push(seagull);
        }
        function drawCloud(_x, _y, _speedx) {
            let cloud = new BeachAnimation.Cloud(_x, _y, _speedx);
            cloudA.push(cloud);
        }
        function drawPeople(_x, _y, _speedx, _speedy) {
            let people = new BeachAnimation.People(_x, _y, _speedx, _speedy);
            peopleA.push(people);
        }
    }
})(BeachAnimation || (BeachAnimation = {}));
//# sourceMappingURL=L09.2_main_script.js.map