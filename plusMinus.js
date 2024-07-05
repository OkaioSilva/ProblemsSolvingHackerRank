function plusMinus(arr) {
    let countPositivos = 0;
    let countNegativos = 0;
    let countZero = 0;

    for (let index = 0; index < arr.length; index++){
        let sumN = arr[index];
        if(sumN > 0){
            countPositivos +=  1
        } else if(sumN < 0){
            countNegativos += 1
        } else{
            countZero += 1
        }
    }
    console.log((countPositivos / arr.length).toFixed(6))
    console.log((countNegativos / arr.length).toFixed(6))
    console.log((countZero / arr.length).toFixed(6))
}

plusMinus([-4, 3, -9, 0, 4, 1])