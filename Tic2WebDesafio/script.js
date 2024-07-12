function validaPrimo(num)
{
    if(num > 0){
        if(num % 2 == 0){
            console.log("não é primo")
        } else {
            console.log(" primo")
        }
    } else {
        console.log("numero invalido")
    }
}

validaPrimo(7);
