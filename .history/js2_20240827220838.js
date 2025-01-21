let array1=[1,2,3]
let array2=[1,2]

function areArraySome (array1,array2){
    
    for(i=0; i<array1.length; i++){
        if(array1[i]===array2[i]){
            return console.log(true) 
        }else{
            return console.log(false)
        }
    }

}
areArraySome (array1,array2)
