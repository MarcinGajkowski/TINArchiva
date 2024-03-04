class Ocena{
    constructor(przedmiot, wartość){
        this.przedmiot = przedmiot;
        this.wartość = wartość;
    }
}

class Student{
    oceny = [];
    średnia = 0;
    constructor(imię, nazwisko){
        this.imię = imię;
        this.nazwisko = nazwisko;
    }
    hello = function(){
        console.log("Witaj " + this.imię + " " + this.nazwisko + ". Twoja średnia ocen to: " + this.średnia + ".\n");
    }
    set grades(x){
        if(x instanceof Ocena){
            this.oceny.push(x);
        }
        let suma = 0;
        this.oceny.forEach((numa) => {suma += numa.wartość});
        this.średnia = suma/this.oceny.length;
    }
    get grades(){
        this.oceny.forEach((grade) => console.log("Przedmiot: " + grade.przedmiot + " - ocena " + grade.wartość + ". "));
    }
}

var Janusz = new Student("Janusz", "Banusz");
var ANG = new Ocena("Angielski", 4.0);
var BIO = new Ocena("Biologia", 4.5);
Janusz.grades = ANG;
Janusz.grades = BIO;
Janusz.hello();
Janusz.grades;