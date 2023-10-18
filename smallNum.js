let array = [1,2,3,4,5,88,76,45]

let min = array[0]

for(let i=0; i<array.length; i++){

    if(array[i]<min){
        min = array[i]
    }

}

console.log(min);