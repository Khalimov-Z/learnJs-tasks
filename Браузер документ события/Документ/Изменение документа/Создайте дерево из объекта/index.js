const container = document.querySelector('#container');
let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

const createEL = (obj) => {
    if (!Object.keys(obj).length) return
    const ul = document.createElement('ul')
    for (let el in obj){
        const li = document.createElement('li');
        li.innerHTML = el;
        const subUl = createEL(obj[el]);
        if (subUl) {
            li.append(subUl);
        }

        ul.append(li);
    }
    return ul
}

const createTree = (elem, obj) => {
    elem.append(createEL(obj))
}

createTree(container, data)