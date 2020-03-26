const button = document.getElementsByClassName('calculator');
const base = document.getElementsByClassName('base')[0].getElementsByTagName('input')[0];
const exponent = document.getElementsByClassName('exponent')[0].getElementsByTagName('input')[0];
const product = document.getElementsByClassName('product')[0].getElementsByTagName('p')[1];

button[0].onclick = calculate;

function calculate() {

//when expontent value is 1 store = base
//for every time greater than 1 multiply store by base

//before loop
    //mutlply base times base

    if (exponent.value > 1) {
        let answer = base.value * base.value;
            for (i=2; i < exponent.value; i++) {
            answer =  answer * base.value; 
            }
        product.innerHTML = answer;
    } 
    else if (exponent.value == 1) {
        product.innerHTML = base.value;
    }
    else if (exponent.value == 0) {
        product.innerHTML = 0;
    }
    else if (exponent.value == -1) {
        product.innerHTML = base.value * -1;
    } 
    else if(exponent.value < -1) {
        let answer = base.value * base.value;
            for (i=-2; i > exponent.value; i--) {
            answer =  answer * base.value * -1; 
            product.innerHTML = answer;
            }
    }
}
       


//begin loop
    //save the base as a var
    //multply var by base
    //new var value as var
//end iteration