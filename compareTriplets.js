function compareTriplets(a, b) {
    let alicePoints = 0;
    let bobPoints = 0;

    for ( let index = 0; index < a.length; index++){
        if(a[index] > b[index]){
            alicePoints += 1
        } else if(a[index] < b[index]){
            bobPoints += 1
        }
    }
    return [alicePoints, bobPoints]
}

console.log(compareTriplets([17,28,30], [99,16,8]))