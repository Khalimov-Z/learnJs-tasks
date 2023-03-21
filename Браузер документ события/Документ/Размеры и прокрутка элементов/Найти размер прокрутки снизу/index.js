const elem = document.querySelector('#scroll')


elem.addEventListener('scroll', () => {
    const scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight
    console.log(scrollBottom);
})