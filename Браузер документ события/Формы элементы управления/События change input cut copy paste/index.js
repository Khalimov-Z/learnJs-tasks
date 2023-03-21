let form = document.forms.calculator;
let diagram = document.querySelector('#diagram');
const heightAfter = document.querySelector('#height-after')

const initial = form.money.value
const interest = form.months.value
const years = form.interest.value/12
let result1 = Math.round(initial * (1 + interest) ** years);

diagram.rows[0].cells[0].innerHTML = `Было ${result1}`

form.addEventListener('change', () => {
    const initial = form.money.value
    const interest = form.months.value
    const years = form.interest.value/12
    let result2 = Math.round(initial * (1 + interest) ** years);
    diagram.rows[0].cells[1].innerHTML = `Станет ${result2}`
    heightAfter.style.height = result2 * 100 / result1 + 'px'
})