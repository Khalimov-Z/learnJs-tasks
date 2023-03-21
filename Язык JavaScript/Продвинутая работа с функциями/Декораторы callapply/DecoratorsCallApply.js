Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.

Например:

function work(a, b) {
  alert( a + b ); 
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); 
}


function spy(func) {

  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}
//////////////////////////////////////////

Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:

function f(x) {
  alert(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».

В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this.

function delay(f, ms) {

  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };

}

let f1000 = delay(alert, 1000);

f1000("test"); 
////////////////////////////////////////////

Результатом декоратора debounce(f, ms) должна быть обёртка,
которая передаёт вызов f не более одного раза в ms миллисекунд. Другими словами,
когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.

function debounce(f, ms) {

  let isCooldown = false;

  return function() {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, ms);
  };

}


let f = debounce(alert, 1000);


f(1);
f(2); 

setTimeout( () => f(3), 100); 
setTimeout( () => f(4), 1100); 
setTimeout( () => f(5), 1500); 
////////////////////////////////////////////

Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку,
передавая вызов в f не более одного раза в ms миллисекунд. Те вызовы, которые попадают в период «торможения», игнорируются.
Отличие от debounce – если проигнорированный вызов является последним во время «задержки», то он выполняется в конце

function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { 
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); 
    isThrottled = true;

    setTimeout(function() {
      isThrottled = false; 
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}