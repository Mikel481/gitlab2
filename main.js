function changeColor(event) {
const button = event.target
const color = button.dataset.color
}
function changeColor(color) {
    const circle =document.getElementById('circle')
   circle.className = `circle ${color}`
}

function colorChangeButtonOnClickHandler(event) {
    const color = event.target.dataset.color
    changeColor(color)
}

const buttons = document.querySelectorAll('[data-type=color_changing_button]')
for (const button of buttons) {
    button.onclick = changeColor
    button.onclick = colorChangeButtonOnClickHandler
}