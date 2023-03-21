const select = document.querySelector('#genres')

console.log(select.value);
console.log(select.options[select.selectedIndex].text);

let newOption = new Option("Классика", "classic");
select.append(newOption);

newOption.selected = true;