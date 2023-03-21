const largeImg = document.querySelector('#largeImg')
document
    .querySelector('#thumbs')
    .addEventListener('click', (e) => {
        if (e.target.closest('a')) {
            e.preventDefault()
            largeImg.src = e.target.closest('a').getAttribute('href')
            largeImg.title = e.target.closest('a').getAttribute('title')
        }
    })