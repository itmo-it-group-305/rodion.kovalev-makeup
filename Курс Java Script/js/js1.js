/**
 * Created by rod on 20.11.15.
 */

//1
//Дан номер месяца (1 — январь, 2 — февраль, ...). Вывести название соответствующего времени года ("зима", "весна" и т.д.).
//Решить через switch.

var season = window.prompt("Введите название месяца и получите время года");

switch (season) {
    case "december":
    case "january":
    case "february":
        console.log("Зима");
        break;
    case "march":
    case "april":
    case "may":
        console.log("Весна");
        break;
    case "june":
    case "july":
    case "august":
        console.log("Лето");
        break;
    case "september":
    case "october":
    case "november":
        console.log("Осень");
        break;
    default:
        console.log("Такому не бывать");
        break;
}

//2
//Определить является ли треугольник со сторонами a, b, c равнобедренным треугольником.

while(true) {
    var Side1 = window.prompt("введите длину первой стороны треугольника");
    var Side2 = window.prompt("введите длину второй стороны треугольника");
    var Side3 = window.prompt("введите длину третьей стороны треугольника");
    parseInt(Side1, Side2);
    parseInt(Side3);


    if (Side1 == Side2 || Side2 == Side3 || Side3 == Side1) {
        console.log("Равнобедренный");
        break;
    }
    else {
        console.log("Не равнобедренный");
    }
}

//task 3
//Проверить истинность высказывания: "Данное целое число является четным двузначным числом".

var number = window.prompt("введите число, кратное двум и являющееся двузначным");
number= parseInt(number);

if (number > 0 && number < 100 && number % 2 == 0) {
    console.log("верно");
}
else {
    console.log("не верно");
}

//4
//Напечатать число 2015 как ряд из повторяющихся чисел через пробел:  2 0 1 5
//Подсказка: применить строковые методы, приведение типа и цикл

var numbers = 2015;
var num = numbers.toString();
console.log(num);

for (var ii = 0; ii < num.length; ii++) {
    document.write(num[ii] + " ");
}

//task 5
//Нарисовать равнобедренный треугольник из символов *. Высоту выбирает пользователь.
//Например: высота = 4, в браузере:
//    *
//   ***
//  *****
// *******
//Для вывода использовать document.write("ваш сформированный html")

//решение работает только с исходным .html файлом, поскольку там настроен text-align



var height = window.prompt("введи высоту треугольника");
height = parseInt(height);

for (var i = 0; i < height; i++) {
    for (var j = 0; j <= i * 2; j++){
        document.write('*');
    }
    document.write('<br>');
}

//task 6
//Значения переменных X, Y, Z поменять местами так, чтобы они оказались упорядоченными по возрастанию.

var x = window.prompt("Enter variable x");
x = parseInt(x);
var y = window.prompt("Enter variable y");
y = parseInt(y);
var z = window.prompt("Enter variable z");
z = parseInt(z);

console.log ("");

if (x > y && y > z) {
    console.log(z, y, x);
}
if (x > z && z > y) {
    console.log(y, z, x);
}
else if (z > x && x > y) {
    console.log(y, x, z);
}
else if (z > y && y > x) {
    console.log(x, y, z);
}
else if (y > z && z > x) {
    console.log(x, z, y);
}
else if (y > x && x > z) {
    console.log(z, x, y);
}
//task 6
//Заданы два массива
//A = [ 12, 4, 3, 10, 1, 20 ]  B = [-3, -7, -100, -33]
//необходимо их объединить в один массив C добавив массив B  в конец(в начало) A.

a = [ 12, 4, 3, 10, 1, 20 ];
b = [-3, -7, -100, -33];
var c = a.concat(b);
var d= b.concat(a);
alert(c);
alert(d);


//task 3
//Задан массив  - [12,4,3,10,1,20]. Удалить из него наименьшее и наибольшее значение. См. оператор delete

var arr = [12,4,3,10,1,20];
var min = arr[0], max = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min){
        min = arr[i];
    }
    if (arr[i] > max){
        max = arr[i];
    }
}

delete arr[arr.indexOf(min)];
delete arr[arr.indexOf(max)];