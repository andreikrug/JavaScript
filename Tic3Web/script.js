    function factorial(num)
     {  let retorno = 0 
        for (i = 0; i<num; i++){
            retorno += parseInt(num*i)
        }
        console.log(retorno)
    }

    factorial(4)