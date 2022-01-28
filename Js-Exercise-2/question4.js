function shuffleArray(array){
    for(let i = 0; i<array.length; i++){

        let j = Math.floor(Math.random() * i);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        
    }
    return array;
}

console.log(shuffleArray([2,3,5,7,8,4]));

