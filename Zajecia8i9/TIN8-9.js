function pascalTri(p){
    var cells = [];
    cells[0] = [1];
    cells[1] = [1,1];
    for(var row=2; row<p; row++){
        cells[row] = [1];
        for(var col=1; col<=row-1; col++){
            cells[row][col] = cells[row-1][col] + cells[row-1][col-1];
            cells[row].push(1);
        }
    }
    return cells;
}

for(var i=0; i<pascalTri(10).length; i++){
    console.log(pascalTri(10)[i]+"\n");
}