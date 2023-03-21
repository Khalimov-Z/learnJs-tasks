const fieldSet = document.querySelector('#contents')

fieldSet.addEventListener('click', (e) => {
    if (!e.target.closest('a')) {
        return
    }
    if (!confirm(`Leave for ${e.target.innerHTML}`)) {
        e.preventDefault()
    }
})