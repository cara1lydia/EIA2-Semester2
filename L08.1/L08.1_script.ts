    /**
    * Aufgabe: L08.1 Generative Art
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 06.05.2022
    * Quellen: 
    */

namespace GenerativeArt {
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
        drawCircles();
        drawHalfCircles();
        drawLines();

    }

    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "black");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    }

    function drawCircles(): void {
        let random1: number = Math.round(10 + Math.random() * 800);

        for (let index: number = 0; index < random1; index++) {

            let x: number = Math.random() * 1585;
            let y: number = Math.random() * 760;
            let radius: number = Math.random() * 25;

            crc2.beginPath();
            crc2.fillStyle = "#575757";
            crc2.strokeStyle = "#575757";
            crc2.lineWidth = 2;

            crc2.arc(x, y, radius, 0, 2 * Math.PI, false);
            
            crc2.fill();
            crc2.stroke();
        }

    }

    function drawHalfCircles(): void {
        let random1: number = Math.round(10 + Math.random() * 800);

        for (let index: number = 0; index < random1; index++) {

            let x: number = Math.random() * 1585;
            let y: number = Math.random() * 760;
            let radius: number = Math.random() * 25;

            crc2.beginPath();
            crc2.strokeStyle = "rgb(87, 87, 87, 0.5";
            crc2.lineWidth = 2;

            crc2.arc(x, y, radius, 1, 1 * Math.PI, false);
            
            crc2.stroke();
        }

    }

    function drawLines(): void {
        for (let index: number = 0; index < 5; index++) {
                   
        let x: number = Math.random() * 800;
        let y: number = Math.random() * 800;
        let z: number = Math.random() * 1600;
        let q: number = Math.random() * 800;
        let h: number = Math.random() * 1600;
        let g: number = Math.random() * 800;
        crc2.beginPath();
        // Point A
        crc2.moveTo(x, y);
        // Point B
        crc2.lineTo(z, q);
        // Point C
        crc2.lineTo(h, g);
        // Join C & A
        crc2.closePath();

        crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        crc2.stroke();
        }
    }

}
