const singers = [1,1,2,2,2,5] // dever retornar o 2

function main(input) 
{   
    let singer = 0
    let singerComp = 0
    let maxCount = 0
    input.foreach((element) => {
        if(singer == 0)
        {
            singer = element
            maxCount += 1
        } else 
        {
            if(singer == element)
            {
                maxCount += 1
            }
            if (singer != element)
            {
                maxCount -= 1
                singerComp += 1
            }
            if(maxCount == 0)
            {
                maxCount = singerComp
                singer = element
            }
        }
        
    })

    console.log(singer)
    console.log(maxCount)
}
// este input vai ser uma lista com o numero referente ao artista, o que aparecer mais vezes vai ser o que vai retornar
// Como fazer?
// Ordenar primeiro? Ele já vem ordenado. 
// Usar alguma função que já abstraia isso no javascript? que já traga o valor mais repetido

main(singers)