function inputValue1() {
    return document.getElementById("inputBill1").value
}

function inputValue2() {
    return document.getElementById("inputBill2").value
}

function inputValue3() {
    return document.getElementById("inputBill3").value
}

function inputValue4() {
    return document.getElementById("inputBill4").value
}

function inputTax() {
    return document.getElementById("inputTax").value
}

function showOutput(output) {
    document.getElementById("output").innerHTML = output
}

function calculationOfBill() {
    let item1 = inputValue1()
    let item2 = inputValue2()
    let item3 = inputValue3()
    let item4 = inputValue4()

    item1 = Number(item1)
    item2 = Number(item2)
    item3 = Number(item3)
    item4 = Number(item4)

    let sum = (item1 + item2 + item3 + item4)
    console.log(sum)

    let taxPercentage = inputTax()

    let tax = (sum * taxPercentage / 100)

    tax = Number(tax)

    let totalBill = sum + tax

    showOutput(totalBill)
}