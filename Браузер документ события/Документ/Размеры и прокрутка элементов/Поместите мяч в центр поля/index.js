const field = document.querySelector('#field')
const ball = document.querySelector('#ball')

const y = (field.clientHeight - ball.clientHeight) / 2
const x = (field.clientWidth - ball.clientWidth) / 2

ball.style.top = y + 'px'
ball.style.left = x + 'px'