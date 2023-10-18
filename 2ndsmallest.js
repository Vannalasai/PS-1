let arr= [1,4,3,2,8,4,5];

let min = arr[0];
let smin = arr[1];

for(let i =1; i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i];
    }

    if(arr[i]>min && arr[i]<smin){
        smin = arr[i];   
    }
}

console.log(smin);