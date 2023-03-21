let tooltip;


document.addEventListener('mouseover', (e) => {
    if (e.target.dataset.tooltip) {
        tooltip = document.createElement('div')
        tooltip.classList.add('tooltip')
        tooltip.innerHTML = `${e.target.dataset.tooltip}`
        document.body.append(tooltip)
        let left = e.target.getBoundingClientRect().left + (e.target.offsetWidth - tooltip.offsetWidth) / 2;
        let top = e.target.getBoundingClientRect().top - tooltip.offsetHeight - 5;
        if (left < 0) {
            left = 0
        }


        tooltip.style.left = left + 'px'
        tooltip.style.top = top + 'px'
    }
})
document.addEventListener('mouseout', (e) => {
    if (e.target.dataset.tooltip) {
        tooltip.remove()
    }
})