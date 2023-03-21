У нас есть дерево, структурированное как вложенные списки ul/li.

Напишите код, который выведет каждый элемент списка <li>:

Какой в нём текст (без поддерева) ?
Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?


for (let li of document.querySelectorAll('li')) {
  let title = li.firstChild.data;

}
/////////////////////////////////////////////

Что выведет этот код?

<script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";    // BODY

  alert( body.firstChild.data ); // что выведет?   
</script>