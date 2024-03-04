function divisor(a, b, c){
    for(var i=a; i<=b; i++){
        if (i%c==0) {
            console.log(i)
        }
    }
}

divisor(-11, 12, 3);
divisor(-3, 25, 5);