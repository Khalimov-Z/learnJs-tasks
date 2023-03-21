const li = document.querySelectorAll('li')

li.forEach(el => {
    const elCount = el.querySelectorAll('li').length
    if (elCount) {
        el.firstChild.data += `[${elCount}]`
    }
})

