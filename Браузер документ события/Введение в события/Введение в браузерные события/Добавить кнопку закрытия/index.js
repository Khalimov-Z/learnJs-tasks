const pane = document.querySelectorAll('.pane')

pane.forEach(el => {
    const button = document.createElement('button')
    button.classList.add('remove-button')
    button.innerHTML = '[x]'
    button.addEventListener('click', () => {
        el.remove()
    })
    el.append(button)
})