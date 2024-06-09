function showUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            response.json().then(data => {
                console.log('data', data)

                if (!data.length) {
                    alert("No single user is registered", "error")
                    return
                }

                let tableStarting = '<div class="table-responsive"><table class="table">'
                let tableEnding = '</table></div>'

                let tableHead = '<thead><tr><th scope="col"#</th><th scope="col">Name</th><th scope="col">phone</th><th scope="col">Email</th><th scope="col">website</th><th scope="col">username</th></tr></thead>'

                let tableBody = ""

                for (let i = 0; i < data.length; i++) {
                    tableBody += '<tr><th scope="row">' + (i + 1) + '</th><td>' + data[i].name + '</td><td>' + data[i].phone + '</td><td>' + data[i].email + '</td><td>' + data[i].website + '</td><td>' + data[i].username + '</td></tr>'
                }

                let table = tableStarting + tableHead + '<tbody>' + tableBody + '</tbody>' + tableEnding

                showOutput(table)
            })
        })
        .catch((err) => {
            alert("something went wrong")
            console.log('error', err)
        })
}

function showOutput(output) {
    document.getElementById("showTable").innerHTML = output
}

function clearOutput() {
    document.getElementById("showTable").innerHTML = ""
}

function showTable() {
    if (!users.length) {
        showNotification("No single user is registered", "error")
        return
    }

    let tableStarting = '<div class="table-responsive"><table class="table">'
    let tableEnding = '</table></div>'

    let tableHead = '<thead><tr><th scope="col"#</th><th scope="col">First Name</th><th scope="col">Last Name</th><th scope="col">Email</th><th scope="col">Date of Birth</th><th scope="col">Age</th></tr></thead>'

    let tableBody = ""

    for (let i = 0; i < users.length; i++) {
        tableBody += '<tr><th scope="row">' + (i + 1) + '</th><td>' + users[i].name + '</td><td>' + users[i].phone + '</td><td>' + users[i].email + '</td><td>' + users[i].website + '</td><td>' + users[i].username + '</td></tr>'
    }

    let table = tableStarting + tableHead + '<tbody>' + tableBody + '</tbody>' + tableEnding

    showOutput(table)
}