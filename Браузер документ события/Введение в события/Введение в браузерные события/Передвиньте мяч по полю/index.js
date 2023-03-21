const field = document.querySelector('#field')
const ball = document.querySelector('#ball')

field.addEventListener('click', (e) => {
    ball.style.top = e.clientY - e.currentTarget.getBoundingClientRect().top - field.clientTop - ball.offsetHeight/2  + 'px'
    ball.style.left = e.clientX - e.currentTarget.getBoundingClientRect().left - field.clientLeft - ball.offsetWidth/2 + 'px'
})