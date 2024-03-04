function auto(rok, przebieg, cena_wyjsciowa, cena_koncowa){
    this.rok = rok;
    this.przebieg = przebieg;
    this.cena_wyjsciowa = cena_wyjsciowa;
    this.cena_koncowa = cena_koncowa;
    this.powieksz = function(){
        cena_wyjsciowa += 1000;
    };
    this.spadekRoczny = function(){
        let spadek = 1000*(2023-rok);
        if(cena_wyjsciowa - spadek<0){
            cena_koncowa = 0;
        }
        cena_koncowa = cena_wyjsciowa - spadek;
        console.log("Cena końcowa po zmianie: " + cena_koncowa + "\n");
    };
    this.spadekJezdny = function(){
        let decrease = 10000*Math.floor(przebieg/100000);
        if(cena_wyjsciowa - decrease<0){
            cena_koncowa = 0;
        }
        cena_koncowa = cena_wyjsciowa - decrease;
        console.log("Cena końcowa po zmianie: " + cena_koncowa + "\n");
    };
    this.dopisek = function(year, przeb){
        this.rok = year;
        this.przebieg = przeb;
        this.spadekRoczny();
        this.spadekJezdny();
    };
}

var skoda = new auto(2005, 375000, 750000, 0);
skoda.powieksz();
skoda.powieksz();
skoda.powieksz();
skoda.powieksz();
skoda.powieksz();
skoda.dopisek(2013, 180000);

var cars = [
    {
        citroen: auto(2004, 420000, 250000, 0),
    },
    {
        renault: auto(2008, 280000, 450000, 0),
    },
    {
        audi: auto(2013, 550000, 725000, 0),
    },
    {
        toyota: auto(2002, 210000, 380000, 0),
    },
];

function welcome(nowy){
    if(nowy instanceof auto){
        if(nowy.cena_wyjsciowa>10000){
            cars.push(nowy);
            console.log("Auto załadowane.");
        }
        else{
            console.log("Auto zbyt tanie.");
        }
    }
    else{
        console.log("Nie da się tego tu dodać.");
    }
}

function yearIncrease(){
    cars.forEach(element => {
        element.rok += 1;
    });
    for(var i of cars){
        console.log(i.rok);
    }
}

var yaris = auto(2006, 245000, 100500, 0);
var varis = auto(2006, 245000, 9500, 0);

welcome(yaris);
welcome(varis);
yearIncrease();