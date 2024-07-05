function diagonalDifference(arr){
    let leftDiagonal = 0;
    let rightDiagonal = 0;

    for( let index = 0; index < arr.length; index++){
        leftDiagonal += arr[index][index] 
        // ou seja, vai pegar o index na posição 0 e no indece 0 que é ([1,2,3] [1]) e vai somar
        // depois, meu index vai ser = 1 e vai no index 1 = [4,5,6], na posição de indice 1 = [5]
        
        // rightDiagonal += arr[index][arr.length - 1] se ficar só assim, ele só vai pegar os números 3,6,9
        rightDiagonal += arr[index][arr.length - 1 - index]
    }

    // return rightDiagonal
    // return (leftDiagonal - rightDiagonal) resolve em partes o problema, pois o exemplo pede valor ABSOLUTO
    return Math.abs(leftDiagonal - rightDiagonal)
}

console.log(diagonalDifference([
    [1,2,3], //0
    [4,5,6], // 1
    [7,8,9] // 2
]))