setInterval(function () {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let now = new Date()

    let day = now.getDay()

    day = days[day]

    let month = now.getMonth()
    month = months[month]

    let date = now.getDate()

    let year = now.getFullYear()

    let hour = now.getHours()

    let min = now.getMinutes()

    let sec = now.getSeconds()

    if (date === 1 || date === 21 || date === 31) {
        date = date + "st"
    } else if (date === 2 || date === 22) {
        date = date + "nd"
    } else if (date === 3 || date === 23) {
        date = date + "rd"
    } else {
        date = date + "th"
    }

    let timeZone;

    if (hour >= 12) {
        timeZone = "pm"
    } else {
        timeZone = "am"
    }

    if (hour > 12) {
        hour = hour - 12
    }

    if (hour < 10) {
        hour = "0" + hour
    }

    if (min < 10) {
        min = "0" + min
    }

    if (sec < 10) {
        sec = "0" + sec
    } else {
        sec = sec
    }

    let presentTime = day + "," + " " + month + " " + date + " " + year + " " + hour + ":" + min + ":" + sec + " " + timeZone
    document.getElementById("output").innerHTML = presentTime
}, 1000)

// let html = day + "," + " " + month + " " + date + " " + year + " " + hour + ":" + min + ":" + sec + " " + timeZone

// document.getElementById("output").innerHTML = html
let now = new Date()
document.getElementById("currentYear").innerHTML = now.getFullYear()
































// function showOutput(output) {
//     document.getElementById("output").innerHTML = output
// }

// function tellDate() {
//     let today = new Date()
//     console.log(today)

//     document.getElementById("currentYear").innerHTML = new Date().getFullYear()


//     showOutput(today)
// }

// tellDate()


// document.getElementById("output").innerHTML = new Date()

// document.getElementById("currentYear").innerHTML = new Date().getFullYear()