function nighttree(h){
    var branch = "";

    for(var i=1; i<=h; i++){

        for(var s=1; s<=h-i; s++){
            branch += "*";
        }

        for(var k=0; k<2*i-1; k++){
            if(i==1 || i==h){
                branch += "*";
            }
            else{
                if(k==0 || k==2*i-2){
                    branch += "*";
                }
                else{
                    branch += " ";
                }
            }
        }
        branch = "\n";
    }
    console.log(branch);
}

nighttree(6);