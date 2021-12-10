let count = 3;
var display = document.getElementById('display-pin');
const action = document.getElementById('action');
const submitButton = document.getElementById('submit');

function generatePin(){
    const pin = Math.round((Math.random() * 10000));
    const pinNumber = pin.toString();
    
    if (pinNumber.length < 4){
        generatePin();
    }

    else {
        display.value = pinNumber;
    }
}

function reduce(){
    count--;
    action.innerText = count;
    if (count == 0){
        submitButton.style.display = 'none';
    }
}

const typedNumbers = document.getElementById('typed-numbers');
let keypad = document.querySelectorAll('.button');
let screenValue = [];

for (let item of keypad) {
    item.addEventListener('click', function(event){
        let keyNumber = event.target.innerText; 
        screenValue.push(keyNumber);
        
        if (keyNumber == 'C'){
            typedNumbers.value = '';
            // screenValue = '';
            // typedNumbers.value = screenValue;
        }
            
        else {
            typedNumbers.value += keyNumber;
            // screenValue += keyNumber;
            // typedNumbers.value = screenValue;
        }
    })
}


function verifyPin(){
    const pinNumber = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    let successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
 
    if (pinNumber == typedNumbers){
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }

    else {
        failError.style.display = 'block';
        successMessage.style.display = 'none';
        reduce();
    }

}


