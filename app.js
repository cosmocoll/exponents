const button = document.getElementsByClassName('calculator');
const base = document.getElementsByClassName('base')[0].getElementsByTagName('input')[0];
const exponent = document.getElementsByClassName('exponent')[0].getElementsByTagName('input')[0];
const product = document.getElementsByClassName('product')[0].getElementsByTagName('p')[1];

button[0].onclick = calculate;

function calculate() {
let store = base.value * exponent.value;
product.innerHTML = store;

}
//when expontent value is 1 store = base
//for every time greater than 1 multiply store by base

//     for (i=0; i < exponent.value; i++) {
        
//         let answer = base.value * base.value;
//         let store = answer;
//         answer * base.value;
//     }
// }
