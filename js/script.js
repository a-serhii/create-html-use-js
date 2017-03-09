var div = document.createElement('div');
div.className = 'wrapper';
div.innerHTML = '';
document.body.appendChild(div);

var page_name = document.createElement('h1');
page_name.innerHTML = 'Тест по программированию';
document.getElementsByTagName('div')[0].appendChild(page_name);


var f = document.createElement("form");
f.setAttribute('method',"post");
f.setAttribute('action',"#");


var title_one = document.createElement('h2');
title_one.innerHTML = '1. Вопрос №1';
var title_two = document.createElement('h2');
title_two.innerHTML = '2. Вопрос №2';
var title_three = document.createElement('h2');
title_three.innerHTML = '3. Вопрос №3';

var i = document.createElement("input");
i.setAttribute('type',"checkbox");
var i2 = document.createElement("input");
i2.setAttribute('type',"checkbox");
var i3 = document.createElement("input");
i3.setAttribute('type',"checkbox");
var i4 = document.createElement("input");
i4.setAttribute('type',"checkbox");
var i5 = document.createElement("input");
i5.setAttribute('type',"checkbox");
var i6 = document.createElement("input");
i6.setAttribute('type',"checkbox");
var i7 = document.createElement("input");
i7.setAttribute('type',"checkbox");
var i8 = document.createElement("input");
i8.setAttribute('type',"checkbox");
var i9 = document.createElement("input");
i9.setAttribute('type',"checkbox");

var textElem1 = document.createTextNode('Вариант ответа №1');
var textElem2 = document.createTextNode('Вариант ответа №2');
var textElem3 = document.createTextNode('Вариант ответа №3');
var textElem4 = document.createTextNode('Вариант ответа №1');
var textElem5 = document.createTextNode('Вариант ответа №2');
var textElem6 = document.createTextNode('Вариант ответа №3');
var textElem7 = document.createTextNode('Вариант ответа №1');
var textElem8 = document.createTextNode('Вариант ответа №2');
var textElem9 = document.createTextNode('Вариант ответа №3');

var label1 = document.createElement('label');
var label2 = document.createElement('label');
var label3 = document.createElement('label');
var label4 = document.createElement('label');
var label5 = document.createElement('label');
var label6 = document.createElement('label');
var label7 = document.createElement('label');
var label8 = document.createElement('label');
var label9 = document.createElement('label');


var s = document.createElement("input");
s.setAttribute('type',"submit");
s.setAttribute('value',"Отправить результат");

f.appendChild(title_one);
label1.appendChild(i);
label1.appendChild(textElem1);
f.appendChild(label1);
label2.appendChild(i2);
label2.appendChild(textElem2);
f.appendChild(label2);
label3.appendChild(i3);
label3.appendChild(textElem3);
f.appendChild(label3);

f.appendChild(title_two);
label4.appendChild(i4);
label4.appendChild(textElem4);
f.appendChild(label4);
label5.appendChild(i5);
label5.appendChild(textElem5);
f.appendChild(label5);
label6.appendChild(i6);
label6.appendChild(textElem6);
f.appendChild(label6);


f.appendChild(title_three);
label7.appendChild(i7);
label7.appendChild(textElem7);
f.appendChild(label7);
label8.appendChild(i8);
label8.appendChild(textElem8);
f.appendChild(label8);
label9.appendChild(i9);
label9.appendChild(textElem9);
f.appendChild(label9);



f.appendChild(s);


document.getElementsByTagName('div')[0].appendChild(f);