function staircase(n){
    let symbol = "#";
    let inputLine = "";
    let position = n-1 // vai garantir que inverta o lado

    // preciso passar por linha e coluna para construir a árvore 
    //   #
    //  ##
    // ###

    for ( let line = 0; line < n; line++){
        for(let column = 0; column < n; column++){
            if( column < position){
                inputLine += ' ';
            }else{
                inputLine += symbol
            }
        }
        console.log(inputLine)
        inputLine = "";
        position -= 1;
    }
}

staircase(6)