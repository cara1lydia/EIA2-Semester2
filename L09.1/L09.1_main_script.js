/**
    * Aufgabe: L09.1 OldMacDonaldsFarm
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 21.05.2022
    * Quellen:
    */
var Farm;
(function (Farm) {
    window.addEventListener("load", handleLoad);
    let barn = { "Grain": 100, "Fruit": 80, "Veggies": 40, "Hay": 100, "Grass": 60, "Seeds": 10 };
    function handleLoad(_event) {
        document.querySelector(".button").addEventListener("click", daybutton);
    }
    function daybutton() {
        let cow = new Farm.Animal("Clarabelle", "COW", "Grain", "moo", 10);
        let pig = new Farm.Animal("Piggy Wiggly", "PIG", "Fruit", "oink", 8);
        let duck = new Farm.Animal("Drake", "DUCK", "Veggies", "quack", 4);
        let horse = new Farm.Animal("Henry", "HORSE", "Hay", "neigh", 10);
        let lamb = new Farm.Animal("Luna", "LAMB", "Grass", "baa", 6);
        let chicken = new Farm.Animal("Cluck Vader", "CHICKEN", "Seeds", "cluck", 1);
        document.getElementById("animal").innerHTML = "";
        document.getElementById("barnfood").innerHTML = "";
        cow.sing();
        cow.eat(barn);
        pig.sing();
        pig.eat(barn);
        duck.sing();
        duck.eat(barn);
        horse.sing();
        horse.eat(barn);
        lamb.sing();
        lamb.eat(barn);
        chicken.sing();
        chicken.eat(barn);
        console.log(cow, pig, duck, horse, lamb, chicken);
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=L09.1_main_script.js.map