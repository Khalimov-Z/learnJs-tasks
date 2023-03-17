Что выведет функция?

function f() {
  alert( this ); // ?
}

let user = {           // Ответ: null.
  g: f.bind(null)
};

user.g();
//////////////////////////

Можем ли мы изменить this дополнительным связыванием?

Что выведет этот код?

function f() {
  alert(this.name);                                      // Ответ: Вася.
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();
//////////////////////////////////

В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({      // Ответ: undefined.
                              // Результатом работы bind является другой объект. У него уже нет свойства test
  name: "Вася"
});

alert( bound.test ); // что выведет? почему?
//////////////////////////////////////


Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.

Однако, его вызов приводит к ошибке. Почему?

Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
//////////////////////////////////////////////

Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, теряющую "this".
Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(() => user.login(true), () => user.login(false));
Ваши изменения должны затрагивать только выделенный фрагмент кода.

