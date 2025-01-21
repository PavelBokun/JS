let array1 = Array.from({length: 500}, () => Math.floor(Math.random() * 1000) + 1);
let array2 = Array.from({length: 500}, () => Math.floor(Math.random() * 1000) + 1);

function areArraySome (array1,array2){
    if(array1.length!==array2.length){
        return console.log(false)
    }
    for(i=0; i<array1.length; i++){
        if(array1[i]!==array2[i]){
            return console.log(false) 
        }else{
            return console.log(true)
        }
    }

}
areArraySome (array1,array2)
console
