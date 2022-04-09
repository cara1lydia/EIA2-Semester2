var randomPoem;
(function (randomPoem) {
    let subject = ["Pippilotta", "Viktualia", "Rollgardina", "Pfefferminz", "Efraimstochter", "Langstrumpf"];
    let attribute = ["findet", "multipliziert", "verschenkt", "reitet", "pflechtet", "segelt"];
    let object = ["was ihr gefällt", "Koffer voller Gold", "kunterbunte Häuser", "kleiner Onkel", "Herr Nilsson", "Zöpfe"];
    for (let i = 5; i >= 0; i--) {
        let verse = getVerse(subject, attribute, object);
        console.log(verse);
    }
    function getVerse(_subject, _attribute, _object) {
        let subjectI = Math.floor(Math.random() * _subject.length);
        let attributeI = Math.floor(Math.random() * _attribute.length);
        let objectI = Math.floor(Math.random() * _object.length);
        let poem = _subject[subjectI] + " " + _attribute[attributeI] + " " + _object[objectI];
        _subject.splice(subjectI, 1);
        _attribute.splice(attributeI, 1);
        _object.splice(objectI, 1);
        return poem;
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=L01.1_script.js.map