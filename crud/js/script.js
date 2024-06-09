let users = []

const create = () => {
    const user = {
        id: users.length + 1,
        name: "Hafiz Abeer",
        email: "hafizabeer@gmail.com",
        password: "123456789",
        phone: "12345234",
        username: "abeer",
        website: "www.abeer.com",
        address: {
            city: "Faisalabad", street: "139", suite: "", zipcode: "38000",
            geo: { lat: "", lng: "" }
        },
        company: { bs: "", catchPhrase: "", name: "Abeer PVT" }
    }

    const isUserFound = users.find(element => element.email === user.email)

    if (isUserFound) {
        return showNotification("User already exists", "error")
    }

    users.push(user)
    showNotification("A new user has been successfully created", "success")
}

const read = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            console.log('data', data);
            users = data
        })
        .catch(err => {
            console.error(err);
        })
}

const find = () => {
    const user = users.find(user => user.email === "hafizabeer@gmail.com")

    if (user) {
        showNotification("User Found", "success")
    } else {
        showNotification("User not found", "error")
    }

    console.log('user', user)
}

const update = () => {
    const pass = "098765432"
    const updatedUsers = users.map((user, i) => {
        if (user.email === "hafizabeer@gmail.com") {
            return { ...user, password: pass }
        } else {
            return user
        }
    })

    users = updatedUsers
    showNotification("A user has been successfully updated", "success")
}

const toDelete = () => {
    const filtetredUsers = users.filter(user => user.id !== 5)
    console.log('filteredUsers', filtetredUsers)
    users = filtetredUsers
    showNotification("A user has been successfully deleted", "success")
}

const toConsole = () => {
    console.log('users', users)
}


window.onload = () => {
    const year = new Date().getFullYear()
    document.getElementById("year").innerHTML = year
}


function showNotification(message, type) {

    let bgColor

    switch (type) {
        case 'success':
            bgColor = "linear-gradient(to right, #1D976C, #93F9B9)"
            break
        case 'error':
            bgColor = "linear-gradient(to right, #93291e, #ed213a)"
            break
        default:
            bgColor = "#000"
    }

    Toastify({
        text: message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: bgColor,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}