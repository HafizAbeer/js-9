// let heading1 = document.getElementsByTagName("h1")

// let newHeading = heading1[0].innerHTML

// heading1[0].innerHTML = "Hafiz"
// heading1[2].innerHTML = "Abeer"
// heading1[3].innerHTML = "Ahmed"

// let heading2 = document.getElementsByTagName("h2")

// let newHeading2 = heading2[0].style.fontSize = "5rem"

// let heading3 = document.getElementsByTagName("h3")

// let newHeading3 = heading3[0].style.color = "red"

// heading3[0].style.fontSize = "6rem"


let heading = document.getElementsByTagName("h1")

for (let i = 0; i < heading.length; i++) {
    heading[i].style.color = "red"
}

let heading2 = document.getElementsByClassName("heading2")

for (let i = 0; i < heading2.length; i++) {
    heading2[i].style.color = "green"
}

let para = document.getElementsByClassName("para")

for (let i = 0; i < para.length; i++) {
    para[i].style.fontSize = "4rem"
}

let link = document.createElement('a')

link.href = "https://www.google.com/maps"

link.innerText = "Cilck to Open Google"
let container = document.getElementById("anchor")
// document.body.appendChild(link)

container.appendChild(link)

function randomColorGenerator() {

    let hexCode = ""

    let alphabets = "0123456789ABCDEF"

    let limit = 6

    for (let i = 0; i < limit; i++) {
        let randomNumber = Math.random()

        hexCode += alphabets.charAt(Math.floor(randomNumber * alphabets.length))
    }

    let completeCode = "#" + hexCode

    console.log(completeCode)

    document.body.style.background = completeCode
}





