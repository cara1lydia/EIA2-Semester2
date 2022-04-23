/**
    * Aufgabe: L03 Memory Settings
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 18.04.2022
    * Quellen: Richard Mukasa, Ann-Kathrin Pfeffer
    */
namespace Memory {
    window.addEventListener("load", handleLoad);
/** global variables */
    let fontColorGlobal: string;
    let countCards: number = 0;
    let values: number[] = [];
    let timeStart: number;
    let timeEnd: number;
    let clickCounter: number = 1;
    let card1: HTMLDivElement;
    let card2: HTMLDivElement;
    let cardHidden1: HTMLDivElement;
    let cardHidden2: HTMLDivElement;
    let move: boolean = false;


    function handleLoad(): void {
        document.querySelector("#btnStart").addEventListener("click", menu);
    }

    function menu(): void {
        /**take put in numbers/colors/font from menu and adapt style of game*/
        let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("wrapper");
        let formData: FormData = new FormData(document.forms[0]);

        for (let entry of formData.entries())
        console.log(entry);

        /**variables for menu */
        let cardAmount: number = parseInt(formData.get("cardAmount").toString());
        let cardSize: number = parseInt(formData.get("cardSize").toString());
        let backColor: string = formData.get("backColor").toString();
        let cardColor: string = formData.get("cardColor").toString();
        let fontColor: string = formData.get("fontColor").toString();
        fontColorGlobal = fontColor;
        let fontStyle: string = formData.get("fontStyle").toString();

        /** remove menu form and start button when button clicked */
        wrapper.removeChild(document.querySelector("form"));
        wrapper.removeChild(document.querySelector("button"));
        wrapper.style.backgroundColor = backColor;
        document.body.style.color = fontColor;
        document.body.style.fontFamily = fontStyle;

        createValues(cardAmount);
        createCards(cardAmount, cardSize, cardColor);
    }
/** take put in amount and create as many values */
    function createValues (_cardQuantity: number): void {
        for (let i: number = 1; i <= _cardQuantity; i++) {
            values.push(i);
            values.push(i);
        }
        shuffle(values);
    }
/**shuffle */
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

    /**create put in card amount*2 in chosen size and color  */
    function createCards(_cardAmount: number, _cardSize: number, _cardColor: string): void {

        let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("wrapper");

        for (let x: number = 0; x < _cardAmount * 2; x++) {
            let cardDiv: HTMLDivElement = document.createElement("div");
            countCards++;
            console.log(countCards);

            wrapper.appendChild(cardDiv);
            cardDiv.classList.add("card");

            cardDiv.style.width = _cardSize / 2 + "px";
            cardDiv.style.height = _cardSize / 2 + "px";
            cardDiv.style.backgroundColor = _cardColor;
            cardDiv.style.color = _cardColor;
            console.log(cardDiv);
    /** values on cards */
            cardDiv.innerHTML = `${values[x]}`;

            console.log(values);

            cardDiv.addEventListener("click", function (): void {
                clickCard(cardDiv);
            });
        }

        timeStart = Date.now();
        move = true;
    }



    function clickCard(_card: HTMLDivElement): void {
        if (move == true) {
            if (_card.style.color == _card.style.backgroundColor && clickCounter == 1) {
                _card.style.color = fontColorGlobal;
                card1 = _card;
                clickCounter++;
            }
            else if (_card.style.color == _card.style.backgroundColor && clickCounter == 2) {
                _card.style.color = fontColorGlobal;
                card2 = _card;

                move = false;
                this.window.setTimeout(compareCards, 2000);
            }
            else if (_card.style.color == fontColorGlobal) {
                return;
            }
        }
    }


    function compareCards(): void {
        if (card1.innerText == card2.innerText) {
            card1.classList.add("hidden");
            cardHidden1 = card1;
            countCards--;
            card2.classList.add("hidden");
            cardHidden2 = card2;
            countCards--;
            console.log(countCards);
            if (countCards == 0) {
                timeEnd = Date.now();
                let timePast: number = timeEnd - timeStart;
                let minutes: number = Math.floor(timePast / 60000);
                let seconds: number = Math.floor(timePast % 60000 / 1000);
                alert("You won! Your time: " + minutes + "min " + seconds + "sek");
            }
        }
        else if (card1 != card2) {
            card1.style.color = card1.style.backgroundColor;
            card2.style.color = card2.style.backgroundColor;
        }
        move = true;
        clickCounter = 1;
    }





}