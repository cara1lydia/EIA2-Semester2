namespace randomPoem {
    let subject: string[] = ["Pippilotta", "Viktualia", "Rollgardina", "Pfefferminz", "Efraimstochter", "Langstrumpf"];
    let attribute: string[] = ["findet", "multipliziert", "verschenkt", "reitet", "pflechtet", "segelt"];
    let object: string[] = ["was ihr gefällt", "Koffer voller Gold", "kunterbunte Häuser", "kleiner Onkel", "Herr Nilsson", "Zöpfe"];

    for (let i: number = 5; i >= 0; i--) {
        let verse: string = getVerse(subject, attribute, object);
        console.log(verse);
    }

    function getVerse(_subject: string[], _attribute: string[], _object: string[]): string {

        let subjectI: number = Math.floor(Math.random() * _subject.length);
        let attributeI: number = Math.floor(Math.random() * _attribute.length);
        let objectI: number = Math.floor(Math.random() * _object.length);

        let poem: string = _subject[subjectI] + " " + _attribute[attributeI] + " " + _object[objectI];

        _subject.splice(subjectI, 1);
        _attribute.splice(attributeI, 1);
        _object.splice(objectI, 1);

        return poem;
    }
}