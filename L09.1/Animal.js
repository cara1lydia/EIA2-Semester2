var Farm;
(function (Farm) {
    class Animal {
        name;
        species;
        food;
        sound;
        foodamount;
        constructor(_name, _species, _food, _sound, _foodamount) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.sound = _sound;
            this.foodamount = _foodamount;
        }
        sing() {
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
        eat(_barn) {
            document.getElementById("animal").innerHTML += "<b>" + "<br>" + this.name + " the " + this.species + " just ate " + this.foodamount + " " + this.food + "." + "</b>" + "<br>" + "<br>";
            _barn[this.food] -= this.foodamount;
            document.getElementById("barnfood").innerHTML += "<b>" + this.food + ": " + _barn[this.food] + "<br>" + "</b>";
            if (_barn[this.food] <= 0) {
                _barn[this.food] = 100;
            }
        }
    }
    Farm.Animal = Animal;
})(Farm || (Farm = {}));
//# sourceMappingURL=Animal.js.map