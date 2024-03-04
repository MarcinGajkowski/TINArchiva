function multable(x){
    var cells = '\n';
    for(var i=1; i<=x; i++){
        for(var j=1; j<=x; j++){
            cells += (i*j) + ' ';
        }
        cells += '\n';
    }
    console.log(cells);
}

multable(8);