const slider = document.querySelector('.slider')
const sliderContent = document.querySelector('.slider-content')
const sliderInner = document.querySelector('.slider-inner')

let position = 0


sliderContent.addEventListener('click', (e) => {
    const width = sliderInner.children[0].clientWidth
    const count = 3
    const move = width * count
    if (e.target.closest('.right')) {
        position -= move
        position = Math.max(position, -width * (sliderInner.children.length - count))
        sliderInner.style.left = `${position}px`
    }
    if (e.target.closest('.left')) {
        position += move
        position = Math.min(position, 0)
        sliderInner.style.left = `${position}px`
    }
})