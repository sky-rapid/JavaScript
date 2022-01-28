arr = [0,1,1,2,3,4,5,5,5,6,7,7,8,9];


let max = 0;
let elem = 0;

for(let i = 0; i<arr.length; i++){
    let count = 0;

    for(let j = 1; j < arr.length - 1; j++){

        if(arr[i] === arr[j]){
            count++;
        }
    }
    if(count > max){
        max = count;
        elem = i;
    }
}

console.log(arr[elem]);