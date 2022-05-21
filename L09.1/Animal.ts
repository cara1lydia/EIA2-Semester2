namespace Farm {
    export class Animal {
        name: string;
        species: string;
        food: string;
        sound: string;
        foodamount: number;

        constructor(_name: string, _species: string, _food: string, _sound: string, _foodamount: number) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.sound = _sound;
            this.foodamount = _foodamount;

        }



        sing(): void {
            document.getElementById("animal").innerHTML +=
                "<b>" + this.species + "</b>" + "<br>" +
                "Old MacDonald had a farm" + "<br>" +
                "E-I-E-I-O" + "<br>" +
                "And on his farm he had a " + "<b>" + this.species + "</b>" + "<br>" +
                "E-I-E-I-O" + "<br>" +
                "With a *" + "<b>" + this.sound + " " + this.sound + "</b>" + "* here " + "<br>" +
                "And a *" + "<b>" + this.sound + " " + this.sound + "</b>" + "* there " + "<br>" +
                "Here a *" + "<b>" + this.sound + "</b>" + "* there a *" + "<b>" + this.sound + "</b>" + "*" + "<br>" +
                "Everywhere a *" + "<b>" + this.sound + " " + this.sound + "</b>" + "*" + "<br>" +
                "Old MacDonald had a farm" + "<br>" +
                "E-I-E-I-O";
        }

        eat(_barn: {}): void {

            document.getElementById("animal").innerHTML += "<b>" + "<br>" + this.name + " the " + this.species + " just ate " + this.foodamount + " " + this.food + "." + "</b>" + "<br>" + "<br>";
            _barn[this.food] -= this.foodamount;

            document.getElementById("barnfood").innerHTML += "<b>" + this.food + ": " + _barn[this.food] + "<br>" + "</b>";
            if (_barn[this.food] <= 0) {
                _barn[this.food] = 100;
            }

    }


}
}