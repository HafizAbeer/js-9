function citiNames() {
    let storeValues = document.getElementById("first-input").value
    let names
    switch (storeValues) {
        case "3800":
            names = "Fsd"
            break;
        case "4000":
            names = "lahore"
            break
        default:
            names = ""
    }
    document.getElementById("output").value = names
}


// function citiNames() {
//     let names
//     let storeValues = document.getElementById("first-input").value

//     switch (storeValues) {
//         case "40000":
//             names = "Faisalabad"
//             break
//         case "50000":
//             names = "Lahore"
//             break
//         case "60000":
//             names = "Karachi"
//             break
//         default:
//             names = ""
//     }

//     document.getElementById("output").value = names
// }