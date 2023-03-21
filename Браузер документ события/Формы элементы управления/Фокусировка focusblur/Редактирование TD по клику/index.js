const table = document.querySelector('#bagua-table')


table.addEventListener('click', (e) => {
    if (e.target.tagName === 'TD') {
        if (document.querySelector('.edit-controls')) {
            return
        }
        e.target.classList.add('td-edit')
        const textarea = document.createElement('textarea')
        textarea.innerHTML = e.target.innerHTML
        textarea.classList.add('textArea')
        textarea.style.width = e.target.clientWidth + 'px'
        textarea.style.height = e.target.clientHeight + 'px'
        e.target.innerHTML = textarea.outerHTML
        textarea.focus();
        e.target.insertAdjacentHTML("beforeEnd",
            `<div class="edit-controls">
                    <button class="edit-ok">OK</button>
                    <button class="edit-cancel">CANCEL</button>
                   </div>`
        );
    }

})

table.addEventListener('click', (e) => {
    if (e.target.closest('.edit-controls')) {
        e.target.parentNode.parentNode.innerHTML = e.target
            .parentNode
            .parentNode
            .querySelector('.textArea').value
    }

})