function fibo(f){
    var fibstart = [0, 1];
    console.log(fibstart[1]);
    
    for(var i=2; i<=f; i++){
        fibstart[i] = fibstart[i-2] + fibstart[i-1];
        console.log(fibstart[i]);
    }
}

fibo(15);