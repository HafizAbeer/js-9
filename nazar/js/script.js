const getInputFieldValue = (id) => {
    return document.getElementById(id).value
}


const handleLogin = () => {
    event.preventDefault()


    let fullName = getInputFieldValue("fullName")
    let email = getInputFieldValue("email")
    let password = getInputFieldValue("password")

    if (fullName.length < 3) {
        return alert("Please Enter Your full name")
    }

    if (email.length < 3) {
        return alert("Please Enter Your email")
    }

    if (password.length < 6) {
        return alert("Please Enter Your correct password")
    }

    document.getElementById("loginCard").style.display = "none"
}