var display = document.getElementById('display-pin');

function generatePin(){
    const pin = Math.round((Math.random() * 10000));
    const pinNumber = pin.toString();
    
    if (pinNumber.length < 4){
        generatePin();
    }
    else{
        display.value = pinNumber;
    }
}


const typedNumbers = document.getElementById('typed-numbers')
document.getElementById('key-pad').addEventListener('click', function(event){
    let keyNumber = event.target.innerText;

    if(keyNumber == 'C'){
        typedNumbers.value = '';
    }

    else if(keyNumber == 'Submit'){
        typedNumbers.value ;
    }

    else {
        typedNumbers.value += keyNumber;
    }
    
})

function verifyPin(){
    const pinNumber = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    let successMessage = document.getElementById('notify-success');
    let failError = document.getElementById('notify-fail');

    if (pinNumber === typedNumbers){
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }

    else{
        failError.style.display = 'block';
        successMessage.style.display = 'none';
    }

}

// const show = document.querySelector('.notify-section');
// show.style.display = 'none';