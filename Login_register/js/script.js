const users = [];

function inputValue(id) {
    return document.getElementById(id).value
}


function handleRegister() {
    event.preventDefault()

    let email = inputValue("email")

    let password = inputValue("password")

    if (!email || !password) {
        alert("Please fill in both email and password");
        return;
    }

    let user = {
        email,
        password
    }

    const checkEmail = users.find(user => user.email === email)

    if (checkEmail) {
        alert("User already registered")
    }
    else {
        users.push(user)
    }

    console.log(users)

    // window.location.href = "index.html"


}