const container = document.querySelector('#container')

container.addEventListener('click', (e) => {
    if (e.target.closest('.remove-button')) e.target.closest('.pane').remove()
})