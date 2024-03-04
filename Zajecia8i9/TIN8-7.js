function surface(a, b, shape){
    var rec = 0;
    var tri = 1;
    var par = 2;
    var tra = 3;
    switch(shape){
        case rec:
            rectangle(a, b);
            break;
        case tri:
            triangle(a, b);
            break;
        case par:
            parallelogram(a, b);
            break;
        case tra:
            trapezoid(a, b);
            break;
        default:
            rectangle(a, b);
            break;
    }
}

function rectangle(a, b){
    var surf = a*b;
    console.log(surf);
}

function triangle(a, h){
    var surf = (a*h)/2;
    console.log(surf);
}

function parallelogram(a, h){
    var surf = a*h;
    console.log(surf);
}

function trapezoid(bases, h){
    var surf = (bases*h)/2;
    console.log(surf);
}

surface(5, 7, 0);
surface(5, 8, 1);
surface(5, 7, 2);
surface(5, 10, 3);