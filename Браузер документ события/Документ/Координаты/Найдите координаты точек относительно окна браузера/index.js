const coords = document.querySelector('#coords')
const field = document.querySelector('#field')
document.onclick = function (e) {
    coords.innerHTML = e.clientX + ':' + e.clientY;
};
const leftTopOuter = `${field.getBoundingClientRect().left} : ${field.getBoundingClientRect().top}`
const rightBottomOuter = `${field.getBoundingClientRect().right} : ${field.getBoundingClientRect().bottom}`
const leftTopInner = `${field.getBoundingClientRect().left + field.clientLeft} :${field.getBoundingClientRect().top + field.clientTop}`
const rightBottomInner = `${field.getBoundingClientRect().right + field.clientLeft + field.clientWidth} :${field.getBoundingClientRect().bottom + field.clientTop + field.clientHeight}`
console.log(leftTopOuter);
console.log(rightBottomOuter);
console.log(leftTopInner);
console.log(rightBottomInner);