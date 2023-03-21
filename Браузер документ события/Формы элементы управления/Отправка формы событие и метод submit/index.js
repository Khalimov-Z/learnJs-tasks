const formContainer = document.querySelector('#prompt-form-container')
const form = document.querySelector('#prompt-form')
const cover = document.querySelector('#cover-div ')


document.querySelector('#btn').addEventListener('click', () => {
    formContainer.style.display = 'block'
    cover.style.display = 'block'
    form.text.focus()
})


form.addEventListener('submit', (e) => {
    e.preventDefault()
    formContainer.style.display = 'none'
    cover.style.display = 'none'
    callback(e.target.text.value);
})
form.addEventListener('click', (e) => {
    if (e.target.value === 'Отмена') {
        formContainer.style.display = 'none'
        cover.style.display = 'none'
        callback(null);
    }
})

function callback(text) {
    alert(text)
}