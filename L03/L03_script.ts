/**
    * Aufgabe: L03 Memory Settings
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 18.04.2022
    */
namespace Memory {
    window.addEventListener ("load", handleLoad);

    let fontColorGlobal: string;
    let clickCounter: number = 0;
    let values: number[] = [];

    function handleLoad(): void {
        document.querySelector("#btnStart").addEventListener("click", menu);

    }

    function menu(): void {
    /**take put in numbers/colors/font from menu and adapt style of game*/
    let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("wrapper");
    let formData: FormData = new FormData(document.forms[0]);

    for (let entry of formData.entries())
    console.log(entry);

    let cardAmount: number = parseInt(formData.get("cardAmount").toString());
    console.log(cardAmount);

    let cardSize: number = parseInt(formData.get("cardSize").toString());
    console.log(cardSize);

    let backColor: string = formData.get("backColor").toString();
    console.log(backColor);

    let cardColor: string = formData.get("cardColor").toString();
    console.log(cardColor);

    let fontColor: string = formData.get("fontColor").toString();
    console.log(fontColor);
    fontColorGlobal = fontColor;

    let fontStyle: string = formData.get("fontStyle").toString();
    console.log(fontStyle);

    wrapper.removeChild(document.querySelector("form"));
    wrapper.removeChild(document.querySelector("button"));
    wrapper.style.backgroundColor = backColor;
    document.body.style.color = fontColor;
    document.body.style.fontFamily = fontStyle;

    iplmtValues(cardAmount);

    iplmtCards(cardAmount, cardSize, cardColor); 

    }

    function shuffle(a: number[]): number[] {
        var j: number, x: number, i: number;
        for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
        }
        return a;
    }

    function iplmtValues (_cardAmount: number): void {
        /** */
        for (let i: number = 1; i <= _cardAmount; i++) {
            values.push(i);
            values.push(i);
        }
        shuffle(values);
    }

    function iplmtCards(_cardAmount: number, _cardSize: number, _cardColor: string): void {

    }

}