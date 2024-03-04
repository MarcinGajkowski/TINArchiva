function pythagoras(a, b, c){
    if(a*a == b*b + c*c || b*b == a*a + c*c || c*c == a*a + b*b){
        console.log('Trójkąt prostokątny dozwolony');
    }
    else{
        console.log('Trójkąt prostokątny niedozwolony');
    }
}

pythagoras(3, 5, 4);
pythagoras(13, 5, 12);
pythagoras(1, 2, 3);