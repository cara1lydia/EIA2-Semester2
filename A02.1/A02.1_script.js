var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        let div0 = document.querySelector(".div0");
        let div1 = document.querySelector(".div1");
        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        div0.addEventListener("click", logInfo);
        div1.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("keyup", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let position = document.querySelector(".position");
        position.innerHTML = "X Coordinate: " + _event.clientX + "px" + " Y Coordinate: " + _event.clientY + "px" + " Target: " + _event.target;
        position.style.top = _event.clientY + "px";
        position.style.left = _event.clientX + "px";
    }
    console.log(setInfoBox);
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event.eventPhase);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=A02.1_script.js.map