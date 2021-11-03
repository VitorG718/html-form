function validate() {
    let form = document.getElementById('main_form')
    let errorMessage = document.getElementById('error_message')
    let name = document.getElementById('name')
    let surname = document.getElementById('surname')
    let email = document.getElementById('email')
    let gender = document.getElementById('gender')
    let password = document.getElementById('password')
    let reenter_password = document.getElementById('reenter_password')
    let phone = document.getElementById('phone')

    errorMessage.style = 'color: red;'
    name.style = 'border: none;'
    surname.style = 'border: none;'
    email.style = 'border: none;'
    gender.style = 'border: none;'
    password.style = 'border: none;'
    reenter_password.style = 'border: none;'
    phone.style = 'border: none;'

    if (name.value == "") {
        errorMessage.innerHTML = 'Name cannot be empty'
        name.style = 'border: 2px red solid;'
        name.focus()
    } else if (name.value.length <= 2) {
        errorMessage.innerHTML = 'Name cannot have less than 2 characters'
        name.style = 'border: 2px red solid;'
        name.value = ""
        name.focus()
    } else if (surname.value == "") {
        errorMessage.innerHTML = 'Surname cannot be empty'
        surname.style = 'border: 2px red solid;'
        surname.focus()
    } else if (surname.value.length <= 2) {
        errorMessage.innerHTML = 'Surname cannot have less than 2 characters'
        surname.style = 'border: 2px red solid;'
        surname.value = ""
        surname.focus()
    } else if (email.value == "") {
        errorMessage.innerHTML = 'Email cannot be empty'
        email.style = 'border: 2px red solid;'
        email.focus()
    } else if (email.value.indexOf('@') == -1) {
        errorMessage.innerHTML = "Email structure is wrong"
        email.style = 'border: 2px red solid;'
        email.value = ""
        email.focus()
    } else if (phone.value == "") {
        errorMessage.innerHTML = 'Phone cannot be empty'
        phone.style = 'border: 2px red solid;'
        phone.focus()
    } else if (password.value == "") {
        errorMessage.innerHTML = 'Password cannot be empty'
        password.style = 'border: 2px red solid;'
        password.focus()
    } else if (reenter_password.value == "") {
        errorMessage.innerHTML = 'Re-enter password cannot be empty'
        reenter_password.style = 'border: 2px red solid;'
        reenter_password.focus()
    } else if (reenter_password.value != password.value) {
        errorMessage.innerHTML = "Password isn't equals"
        reenter_password.style = 'border: 2px red solid;'
        password.style = 'border: 2px red solid;'
        password.value = ""
        reenter_password.value = ""
        password.focus()
    } else if (gender.value == "") {
        errorMessage.innerHTML = "Gender cannot be empty"
        gender.style = 'border: 2px red solid;'
        gender.focus()
    } else {
        errorMessage.innerHTML = "Signed up!"
        errorMessage.style = 'color: green;'
        form.submit()
    }
}