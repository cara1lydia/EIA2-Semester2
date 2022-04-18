/**
    * Aufgabe: L03 Memory Settings
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 18.04.2022
    */
var Memory;
(function (Memory) {
    window.addEventListener("load", handleLoad);
    let fontColorGlobal;
    let clickCounter = 0;
    let values = [];
    function handleLoad() {
        document.querySelector("#btnStart").addEventListener("click", menu);
    }
    function menu() {
        /**take put in numbers/colors/font from menu and adapt style of game*/
        let wrapper = document.getElementById("wrapper");
        let formData = new FormData(document.forms[0]);
        for (let entry of formData.entries())
            console.log(entry);
        let cardAmount = parseInt(formData.get("cardAmount").toString());
        console.log(cardAmount);
        let cardSize = parseInt(formData.get("cardSize").toString());
        console.log(cardSize);
        let backColor = formData.get("backColor").toString();
        console.log(backColor);
        let cardColor = formData.get("cardColor").toString();
        console.log(cardColor);
        let fontColor = formData.get("fontColor").toString();
        console.log(fontColor);
        fontColorGlobal = fontColor;
        let fontStyle = formData.get("fontStyle").toString();
        console.log(fontStyle);
        wrapper.removeChild(document.querySelector("form"));
        wrapper.removeChild(document.querySelector("button"));
        wrapper.style.backgroundColor = backColor;
        document.body.style.color = fontColor;
        document.body.style.fontFamily = fontStyle;
        iplmtValues(cardAmount);
        iplmtCards(cardAmount, cardSize, cardColor);
    }
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    function iplmtValues(_cardAmount) {
        /** */
        for (let i = 1; i <= _cardAmount; i++) {
            values.push(i);
            values.push(i);
        }
        shuffle(values);
    }
    function iplmtCards(_cardAmount, _cardSize, _cardColor) {
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=L03_script.js.map