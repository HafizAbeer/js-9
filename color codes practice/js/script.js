function inputColor(id) {
    return document.getElementById(id).value
}

function handleChangeColor() {
    let color1 = inputColor("color1")
    let color2 = inputColor("color2")
    let color3 = inputColor("color3")

    document.body.style.background = 'linear-gradient(to right, ' + color1 + ' , ' + color2 + ' , ' + color3 + ')'
}