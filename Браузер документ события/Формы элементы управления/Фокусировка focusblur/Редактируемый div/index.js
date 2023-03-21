const view = document.querySelector('#view')

view.addEventListener('focus', () => {
    view.contentEditable = true
})
document.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        view.blur()
    }
})