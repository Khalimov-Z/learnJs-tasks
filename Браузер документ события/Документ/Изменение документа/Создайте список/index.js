const ul = document.createElement('ul')
document.body.append(ul);

const createList = (elem, text) => {
    const li = document.createElement('li')
    li.textContent = text
    elem.append(li)
}

while (true) {
    let text = prompt('Введите текст', '')
    if (!text) {
        break
    }
    createList(ul, text)
}