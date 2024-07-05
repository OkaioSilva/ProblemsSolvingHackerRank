function simpleArraySum(ar){
    let countArr = 0;

    for( const i in ar){
        let num = ar[i]
        if(num === Number(num)){
            countArr += num
        }
    }
    return countArr

}

console.log(simpleArraySum([1,2,3,4,10,11]))