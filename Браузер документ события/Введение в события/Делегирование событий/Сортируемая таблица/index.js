const grid = document.querySelector('#grid')


grid.addEventListener('click', (e) => {
    const rowsArray = Array.from(grid.rows).slice(1)
    if (e.target.dataset.type) {
        const cellsNumber = e.target.dataset.type === 'number' ? 0 : 1
        rowsArray.sort((rowA, rowB) => {
            return cellsNumber
                ? rowA.cells[cellsNumber].innerHTML > rowB.cells[cellsNumber].innerHTML ? 1 : -1
                : rowA.cells[cellsNumber].innerHTML - rowB.cells[cellsNumber].innerHTML
        })
    }
    grid.append(...rowsArray)
})