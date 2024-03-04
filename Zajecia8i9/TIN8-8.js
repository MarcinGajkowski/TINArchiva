var rec = function rectangle(a, b){
    var surf = a*b;
    console.log(surf);
}

var tri = function triangle(a, h){
    var surf = (a*h)/2;
    console.log(surf);
}

var par = function parallelogram(a, h){
    var surf = a*h;
    console.log(surf);
}

var tra = function trapezoid(bases, h){
    var surf = (bases*h)/2;
    console.log(surf);
}

function surface(a, b, shape){
    return shape(a, b);
}

surface(5, 7, rec);
surface(5, 8, tri);
surface(5, 9, par);
surface(5, 10, tra);