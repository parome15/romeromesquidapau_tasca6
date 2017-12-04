function esprimer(numero){
    var n = numero - 1;

    while(n>=2){
        if(numero%n == 0){
            return false; 
        } 
        n--;
    }
}