let array1=[1,2,3]
let array2=[1,2,3]

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
