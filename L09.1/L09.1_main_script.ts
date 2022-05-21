/**
    * Aufgabe: L09.1 OldMacDonaldsFarm
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 21.05.2022
    * Quellen: 
    */

namespace Farm {

    window.addEventListener("load", handleLoad);

    let barn = {"Grain": 100, "Fruit": 80, "Veggies": 40, "Hay": 100, "Grass": 60, "Seeds": 10};

    function handleLoad(_event: Event): void {
        document.querySelector(".button").addEventListener("click", daybutton);
    }

    function daybutton(): void {

        let cow: Animal = new Animal("Clarabelle", "COW", "Grain", "moo", 10);
        let pig: Animal = new Animal("Piggy Wiggly", "PIG", "Fruit", "oink", 8);
        let duck: Animal = new Animal("Drake", "DUCK", "Veggies", "quack", 4);
        let horse: Animal = new Animal("Henry", "HORSE", "Hay", "neigh", 10);
        let lamb: Animal = new Animal("Luna", "LAMB", "Grass", "baa", 6);
        let chicken: Animal = new Animal("Cluck Vader", "CHICKEN", "Seeds", "cluck", 1);

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
}