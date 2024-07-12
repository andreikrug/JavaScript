


function calcula()
{
    let sum = 0;
    let nome = prompt("digite seu nome:");
    for (i = 0; i<3; i++)
    {
       sum += parseInt(prompt("digite a nota " + i))
    }
    document.write("<h1 style = >Sua nota média é:</h1>")
    document.write("<h1>"+sum/3+"</h1>")
    document.write("<br>")
    
}

calcula()