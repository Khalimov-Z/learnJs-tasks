const tree = document.querySelector('#tree')

tree.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
        e.target.parentNode.childNodes.forEach(el => {
            if (el.tagName !== 'SPAN') {
                el.hidden = !el.hidden
            }
        })
    }
})