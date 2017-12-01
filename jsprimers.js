function esprimer(numero){
    i = 2;
    while(i<numero){
        if(numero%i == 0){
            return false;
            i++;
        }else{
            return true;
        }
    }
}