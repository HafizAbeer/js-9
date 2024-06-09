document.getElementById("signIn").onclick = function () {
    document.getElementById("signUp").style.display = "block"
    document.getElementById("signIn").style.display = "none"
    document.getElementById("card2").style.display = "block"
    document.getElementById("card1").style.display = "none"
}
const inputFieldValue = (id) => {
    return document.getElementById(id).value
}
let emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//
function showNotification(msg, type) {
    bgColor = ""
    switch (type) {
        case "success":
            bgColor = "green"
            break
        case "error":
            bgColor = "red"
            break
        default:
            bgColor = "black"
    }
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // top or bottom
        position: "left", // left, center or right
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: bgColor,
        },
        onClick: function () { } // Callback after click
    }).showToast();

}
function uniqueid() {
    let id = Math.random().toString(36).slice(2)
    return id
}
function signIn() {
    document.getElementById("signUp").style.display = "none"
    document.getElementById("signIn").style.display = "block"
    document.getElementById("card1").style.display = "none"
    document.getElementById("card2").style.display = "block"
}
let users = []
function handleSignUp() {
    event.preventDefault()
    let email = inputFieldValue("email")
    let password = inputFieldValue("password")
    if (!emailFormat.test(email)) {
        showNotification("Please Type Your Email Properly", "error")
        return
    }
    if (password.length < 5) {
        showNotification("Please Type Your Email Properly", "error")
        return
    }
    email = email.trim()
    password = password.trim()
    let user = {
        email,
        password,
        uid: uniqueid(),
        status: "active",
        createdAt: new Date()
    }
    const finduser = users.find(element => element.email === user.email || element.password === user.password)
    if (finduser) {
        showNotification("User already exist", "error")
        return
    }
    users.push(user)
    showNotification("You are successfully register", "success")
    console.log(user)
    console.log(users)
}
function handleSignIn() {
    event.preventDefault()
    let email = inputFieldValue("email2")
    let password = inputFieldValue("password2")
    if (!emailFormat.test(email)) {
        showNotification("Please Type Your Email Properly", "error")
        return
    }
    if (password.length < 6) {
        showNotification("Please Type Your Email Properly", "error")
        return
    }
    email = email.trim()
    password = password.trim()
    let user = {
        email,
        password,
        uid: uniqueid(),
        status: "active",
        createdAt: new Date()
    }
    const finduser = users.find(user => user.email === email)
    if (finduser) {
        const findpassword = users.find(user => user.password === password)
        if (findpassword) {
            showNotification("Congrat you are login", "success")
            console.log(user)
            document.getElementById("type-email").innerHTML = email
            return
        } else {
            showNotification("password enter are wrong", "error")
            return
        }
    }
    showNotification("invalid email and password", "error")
}
document.getElementById("correct").onclick = function () {
    document.getElementById("todo-page").style.display = "block"
    document.getElementById("card2").style.display = "none"
    document.getElementById("card1").style.display = "none"
    document.getElementById("signIn").style.display = "none"
    document.getElementById("type-email").style.display = "none"
    document.getElementById("first").style.display = "none"
    document.getElementById("second").style.display = "block"
}