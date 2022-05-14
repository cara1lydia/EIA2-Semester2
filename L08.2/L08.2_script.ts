/**
    * Aufgabe: L08.2 Strand
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 11.05.2022
    * Quellen: 
    */

namespace Beach {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.canvas.width = window.innerWidth;
        crc2.canvas.height = window.innerHeight;

        drawBackground();

        drawSun({ x: 0.3 * window.innerWidth, y: 0.3 * window.innerHeight });

        drawCloud({ x: 0.6 * window.innerWidth, y: 0.2 * window.innerHeight }, { x: 0.15 * window.innerWidth, y: 0.13 * window.innerHeight });
        drawCloud({ x: 0.15 * window.innerWidth, y: 0.4 * window.innerHeight }, { x: 0.15 * window.innerWidth, y: 0.13 * window.innerHeight });
        drawCloud({ x: 0.8 * window.innerWidth, y: 0.35 * window.innerHeight }, { x: 0.15 * window.innerWidth, y: 0.13 * window.innerHeight });

        drawSand({ x: window.innerWidth, y: -0.05 * window.innerHeight });

        drawPeople({ x: 0.9 * window.innerWidth, y: 0.7 * window.innerHeight }, 6);
        drawPeople({ x: 0.7 * window.innerWidth, y: 0.8 * window.innerHeight }, 1);
        drawPeople({ x: 0.5 * window.innerWidth, y: 0.6 * window.innerHeight }, 9);
        drawPeople({ x: 0.3 * window.innerWidth, y: 0.7 * window.innerHeight }, 6);

        drawRocks({ x: 0, y: window.innerHeight }, 50, 150, "#331b0b", "#82461e");

        drawSeagull({ x: 0.1 * window.innerWidth, y: 0.2 * (window.innerHeight * 2) });
        drawSeagull({ x: 0.4 * window.innerWidth, y: 0.5 * window.innerHeight });


    }

    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#8aa4a8");
        gradient.addColorStop(0.4, "#ffda45");
        gradient.addColorStop(0.5, "#243166");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    }

    function drawCloud(_position: Vector, _size: Vector): void {

        let nParticles: number = 80;
        let radiusParticle: number = 60;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);

        gradient.addColorStop(0.5, "rgb(255, 255, 255, 0.1");
        gradient.addColorStop(1, "rgb(255, 255, 255, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }



    function drawSun(_position: Vector): void {
        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "rgb(255, 250, 148, 1");
        gradient.addColorStop(0.1, "rgb(255, 250, 148, 0.9");
        gradient.addColorStop(0.2, "rgb(255, 250, 148, 0.7");
        gradient.addColorStop(1, "rgb(255, 250, 148, 0");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawSeagull(_position: Vector): void {


        let x: number = (Math.random() * 30) + _position.x;
        let y: number = (Math.random() * 30) + _position.y;

        crc2.beginPath();
        crc2.bezierCurveTo(x, y - 50, x + 40, -0.05 * (y - 5000), x + 80, y - 50);
        crc2.moveTo(x + 80, y - 50);
        crc2.bezierCurveTo(x + 80, y - 50, x + 120, -0.05 * (y - 5000), x + 160, y - 50);

        crc2.lineWidth = 1;
        crc2.strokeStyle = "rgb(0, 0, 0, 0.5";
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.stroke();
        crc2.restore();

    }

    function drawRocks(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        let stepMin: number = 20;
        let stepMax: number = 50;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

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
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    function drawSand(_position: Vector): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, window.innerHeight);
        gradient.addColorStop(0.5, "#ffe0a1");
        gradient.addColorStop(0.7, "#e3bf78");
        gradient.addColorStop(0.9, "#d1a95a");
        gradient.addColorStop(1.0, "#9e7f41");

        crc2.beginPath();
        crc2.strokeStyle = gradient;
        crc2.fillStyle = gradient;

        crc2.moveTo(_position.x, _position.y + 0.6 * window.innerHeight);
        crc2.lineTo(_position.x + window.innerWidth, _position.y + window.innerHeight);
        crc2.lineTo(_position.x + window.innerWidth, _position.y + window.innerHeight);
        crc2.lineTo(_position.x - window.innerWidth, _position.y + window.innerHeight);

        crc2.closePath();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.stroke();
        crc2.fill();
        crc2.restore();
    }

    function drawPeople(_position: Vector, _rotation: number): void {
        crc2.strokeStyle = "rgb(0, 0, 0, 0.5";
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.rotate(_rotation);
        crc2.beginPath();
        crc2.arc(0, -23.5, 4, 0, 2 * Math.PI);
        crc2.moveTo(-1, -25.5);
        crc2.lineTo(-0.5, -25.5);
        crc2.moveTo(2, -25.5);
        crc2.lineTo(1.5, -25.5);
        crc2.closePath();
        crc2.lineWidth = 0.6;
        crc2.stroke();
        crc2.beginPath();
        crc2.arc(-0, -23.5, 2, 0, Math.PI);
        crc2.lineWidth = 0.7;
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(-1.5, -10);
        crc2.lineTo(-9, -6);
        crc2.moveTo(-1.5, -10);
        crc2.lineTo(-0.5, -20);
        crc2.moveTo(-1, -15);
        crc2.lineTo(-8, -21);
        crc2.moveTo(-1, -15);
        crc2.lineTo(8, -18);
        crc2.lineWidth = 1.5;
        crc2.stroke();
        crc2.restore();
    }
}






