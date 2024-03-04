function pinetree(h){
    var branch = '';
    
    for(var i=1; i<=h; i++){
        for(var j=0; j<i; j++){
            branch += '*';
        }
        branch += '\n';
    }
    console.log(branch);
}

pinetree(6);