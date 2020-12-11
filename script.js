const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Functions

function showError(input, message) {
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid')
    }
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            console.log(input.id)
            showError(input, `${getFieldName(input)} is required`) // input element has an id so we use this for the message
        } else {
            showSuccess(input)
        }
    }) // high order array methods; loops through an array and do some functionality
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    } else {
        showSuccess(input)
    }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match')
    }
}

// Get Field Name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1) // start at 1 and keep the rest of the string
}

// Event listeners (Refactored)
form.addEventListener('submit', function(e) {
    e.preventDefault()

    checkRequired([username, email, password, password2]) // pass in an array of inputs
    checkLength(username, 8, 15)
    checkLength(password, 8, 25)
    checkEmail(email)
    checkPasswordsMatch(password, password2)
})


// ***** OLD CODE ******* //
// Event listeners
// form.addEventListener('submit', function(e) {
//     e.preventDefault()

//     if  (username.value === '') {
//         showError(username, 'Username is required') // takes element and message
//     } else {
//         showSuccess(username)
//     }
//     if  (email.value === '') {
//         showError(email, 'Email is required') // takes element and message
//     } else if(!isValidEmail(email.value)) {
//         showError(email, 'Email is not valid')
//     } else {
//         showSuccess(email)
//     }
//     if  (password.value === '') {
//         showError(password, 'Password is required') // takes element and message
//     } else {
//         showSuccess(password)
//     }
//     if  (password2.value === '') {
//         showError(password2, 'Password 2 is required') // takes element and message
//     } else {
//         showSuccess(password2)
//     }
// })

