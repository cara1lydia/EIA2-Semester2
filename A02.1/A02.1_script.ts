namespace EventInspector {
    window.addEventListener("load", handleLoad);




    function handleLoad(): void {
        document.addEventListener("mousemove", setInfoBox);

        let div0: HTMLDivElement = document.querySelector(".div0");
        let div1: HTMLDivElement = document.querySelector(".div1");

        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        div0.addEventListener("click", logInfo);
        div1.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("keyup", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("keyup", logInfo);
    }

    function setInfoBox(_event: MouseEvent): void {
        let position: HTMLSpanElement = document.querySelector(".position");

        position.innerHTML = "X Coordinate: " + _event.clientX + "px" + " Y Coordinate: " + _event.clientY + "px" + " Target: " + _event.target;
        position.style.top = _event.clientY + "px";
        position.style.left = _event.clientX + "px";

    }

    console.log(setInfoBox);

    function logInfo(_event: Event): void {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event.eventPhase);
    }

}