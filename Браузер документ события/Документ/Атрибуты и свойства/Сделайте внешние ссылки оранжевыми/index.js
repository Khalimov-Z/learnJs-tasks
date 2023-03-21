
document.querySelectorAll('ul li a ').forEach(link => {
    let ref = link.getAttribute('href')
    if (ref.includes('://') && !ref.includes('http://internal.com')) {
        link.style.color = 'orange';
    }
})