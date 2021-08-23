const form = document.getElementById('form');
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// functions
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

function isValidEmail(email){
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// Uppercase first char
function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function checkRequired(inputArr){
  inputArr.forEach(function(input){
    if(input.value.trim() === ''){
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSuccess(input);
    }
  });
}

// Event Listeners
form.addEventListener('submit', function(e){
  checkRequired([username, email, password, password2]);
  
  e.preventDefault();
})