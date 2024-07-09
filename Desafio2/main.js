const arr = [10, 15, 20, 23];

arr.forEach(multiple);


function multiple(element)
{
    if(element % 10 == 0){
        console.log(element + "is divided by 10")
    } else {
        console.log(element+ "is not divided by 10")
    }
}
