function aVeryBigSum(ar) {
    let countArr = 0;

    for (let index in ar){
        let sumIndex = ar[index]
        // if(sumIndex === Number(sumIndex)){
        //     countArr += sumIndex
        // }
        sumIndex === Number(sumIndex) ? countArr += sumIndex : 0
    }
    return countArr
}



console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))