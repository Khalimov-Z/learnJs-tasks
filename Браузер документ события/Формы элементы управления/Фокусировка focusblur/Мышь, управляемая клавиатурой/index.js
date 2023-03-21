const mouse = document.querySelector('#mouse')

mouse.tabIndex = 0
mouse.addEventListener('click', (ec) => {
    ec.target.focus()
    mouse.addEventListener('keydown', (ek) => {
        const stylesEl = getComputedStyle(ec.target)
        const el = ec.target
        switch (ek.code) {
            case'ArrowRight':
                ec.target.style.marginLeft = parseFloat(stylesEl.marginLeft) + el.offsetWidth + 'px'
                break
            case'ArrowLeft':
                ec.target.style.marginLeft = parseFloat(stylesEl.marginLeft) - el.offsetWidth + 'px'
                break
            case'ArrowUp':
                ec.target.style.marginTop = parseFloat(stylesEl.marginTop) - el.offsetHeight + 'px'
                break
            case'ArrowDown':
                ec.target.style.marginTop = parseFloat(stylesEl.marginTop) + el.offsetHeight + 'px'
                break

        }
    })
})