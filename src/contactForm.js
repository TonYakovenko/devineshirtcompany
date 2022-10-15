const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');

function showError(input, message){
    const formControl = input.parentElement; 
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement; 
    formControl.className = 'form-control success';
}

function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(String(input.value.trim()).toLowerCase()))
    {
        showSuccess(input);
    }else{
        showError(input, 'Email is not valid');
    }
}

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === '')
        {
            showError(input, `${getFieldName(input)} is required`);
        }
    });
}

// Check input length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }
    else if(input.value.length > max)
    {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }
    else
    {
        showSuccess(input);
    }
}

// Count words in a message
function countWords(input)
{
    return input.split(' ').length;
}

//Check message -- min is a number of words
function checkMessage(input, min)
{
    if(countWords(input.value) < min)
    {
        showError(input, `${getFieldName(input)} must be at least ${min} words`);
    }
    else
    {
        showSuccess(input);
    }
}

// Get Field Name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    checkLength(username, 3, 15);
    checkEmail(email);
    checkMessage(message, 4);

    checkRequired([username, email, message]);
});



