function countingSort(arr) {
    let nArray = new Array(100).fill(0)
    for( let index = 0; index < arr.length; index++){
        nArray[arr[index]]++
    
    }
    
    return nArray

}

//O método fill() preenche todos os valores do array a partir do índice inicial a um índice final com um valor estático.