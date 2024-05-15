function inputValue(id) {
    return Number(document.getElementById(id).value)
}

function showOutput(output) {
    document.getElementById("output").innerHTML = output
}

function calculationOfBill() {
    let item1 = inputValue("item1")

    let item2 = inputValue("item2")

    let item3 = inputValue("item3")

    let item4 = inputValue("item4")

    let sum = (item1 + item2 + item3 + item4)

    let taxPercentage = inputValue("tax")

    let tax = (sum * (taxPercentage / 100))

    let totalBill = sum + tax

    showOutput(totalBill)
}