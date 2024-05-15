function fillCity() {
    let cityName
    let zipCode = document.getElementById("zip").value

    switch (zipCode) {
        case "3800":
            cityName = "Faisalabad"
            break
        case "400":
            cityName = "Lahore"
            break
        case "60000":
            cityName = "Karachi"
            break
        default:
            cityName = ""
    }

    document.getElementById("city").value = cityName
}