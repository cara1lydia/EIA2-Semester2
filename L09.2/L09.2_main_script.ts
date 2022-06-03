/**
    * Aufgabe: L09.2 Strand Animation
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 27.05.2022
    * Quellen: Jason Hühne
    */
namespace BeachAnimation {

    export let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        let peopleA: People[] = [];
        let cloudA: Cloud[] = [];
        let seagullA: Seagull[] = [];

        crc2.canvas.width = window.innerWidth * 0.7;
        crc2.canvas.height = window.innerHeight * 0.8;

        drawBackground(canvas.width, canvas.height);
        drawSun(crc2.canvas.width * 0.1, crc2.canvas.height * 0.2);
        drawWater();
        drawSand(canvas.width, -0.25 * canvas.height);
        drawRocks(canvas.width * - 0.1, canvas.height * 0.8, 50, 150,);

        let imgData: ImageData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height); 

        objects();

        

        function objects(): void {
            drawCloud(crc2.canvas.width * 0.3, crc2.canvas.height * - 0.2, -0.5);
            drawCloud(crc2.canvas.width * 0.6, crc2.canvas.height * - 0.05, -0.3);
            drawCloud(crc2.canvas.width * - 0.1, crc2.canvas.height * - 0.1, 0.6);
            drawCloud(crc2.canvas.width * 0.1, crc2.canvas.height * 0.1, 0.4);
            drawSeagull(crc2.canvas.width * 0.2, crc2.canvas.height * - 0.1, 0.1, 0.1);
            drawSeagull(crc2.canvas.width * 0.5, crc2.canvas.height * 0.1, 0.5, 0.5);
            drawSeagull(crc2.canvas.width * 0.7, crc2.canvas.height * - 0.2, 0.3, 0.3);
            for (let i: number = 0; i < 10; i++) {
                drawPeople(crc2.canvas.width * Math.random(), crc2.canvas.height * 0.2 + Math.random() * crc2.canvas.height * 0.2, Math.random() * 5, Math.random() * 5);
            }

            requestAnimationFrame(drawScene);

            function drawScene(): void {

                crc2.clearRect(0, 0, canvas.width, canvas.height);
                crc2.putImageData(imgData, 0, 0);

                for (let i: number = 0; i < cloudA.length; i++) {
                    cloudA[i].animate();
                    cloudA[i].draw();
                }

                for (let i: number = 0; i < seagullA.length; i++) {
                    seagullA[i].animate();
                    seagullA[i].draw();
                }

                for (let i: number = 0; i < peopleA.length; i++) {
                    peopleA[i].animate();
                    peopleA[i].draw();
                }

                requestAnimationFrame(drawScene);
                console.log(drawScene);
                
            }
            
        }

        

        function drawBackground(_x: number, _y: number): void {

            let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
            let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 600);
            gradient.addColorStop(0, "#8aa4a8");
            gradient.addColorStop(0.3, "#ff8330");
            gradient.addColorStop(0.4, "#ffdd57");

            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, _x, _y);
        }

        function drawWater(): void {

            let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
            let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 500);
            gradient.addColorStop(0.2, "#ffdd57");
            gradient.addColorStop(0.5, "#4256bd");
            gradient.addColorStop(0.8, "#4296bd");
            crc2.fillStyle = gradient;
            crc2.fillRect(-0.1 * crc2.canvas.width, crc2.canvas.height * 0.2, crc2.canvas.width, crc2.canvas.height * 0.6);
        }

        function drawSun(_x: number, _y: number): void {

            let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
            let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

            crc2.translate(_x, _y);
            crc2.fillStyle = "#ffdd57";
            crc2.arc(100, 120, 80, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }

        function drawSand(_x: number, _y: number): void {

            let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
            let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
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

        function drawRocks(_x: number, _y: number, _min: number, _max: number): void {
            let stepMin: number = 20;
            let stepMax: number = 50;
            let x: number = 0;

            crc2.save();
            crc2.translate(_x, _y);

            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, -_max);

            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y: number = -_min - Math.random() * (_max - _min);

                crc2.lineTo(x, y);
            } while (x < crc2.canvas.width);

            crc2.lineTo(x, 0);
            crc2.closePath();

            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
            gradient.addColorStop(0, "#331b0b");
            gradient.addColorStop(0.7, "#82461e");

            crc2.fillStyle = gradient;
            crc2.fill();

            crc2.restore();
        }

        function drawSeagull(_x: number, _y: number, _speedx: number, _speedy: number): void {
            let seagull: Seagull = new Seagull(_x, _y, _speedx, _speedy);
            seagullA.push(seagull);

        }

        function drawCloud(_x: number, _y: number, _speedx: number): void {
            let cloud: Cloud = new Cloud(_x, _y, _speedx);
            cloudA.push(cloud);

        }

        function drawPeople(_x: number, _y: number, _speedx: number, _speedy: number): void {
            let people: People = new People(_x, _y, _speedx, _speedy);
            peopleA.push(people);
        }
    }
}