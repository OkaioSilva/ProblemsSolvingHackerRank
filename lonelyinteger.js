// function lonelyinteger(a) {
//   // let sortArray = a.sort((a, b) => a - b)
//   let nUnico = 0;
//   for (let index = 0; index < a.length; index++) {
//     if (nUnico ^= a[index]){
//         return nUnico;
//     }
//   }

//   // console.log(nUnico)
// }

// console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));

let arr = [1, 2, 3, 4, 3, 2, 1, 4, 5]
let sortArr = arr.sort((a, b) => a - b)
let nUnic = 0;
// O operador de atribuição XOR bit a bit ( ^=) executa XOR bit a bit nos dois operandos e atribui o resultado ao operando esquerdo.
sortArr.forEach((Elemento)=> nUnic ^= Elemento
)
console.log(nUnic);
// console.log(sortArr);
