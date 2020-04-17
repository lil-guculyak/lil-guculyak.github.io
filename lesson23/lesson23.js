//1- сума чисел
let a = +prompt("Введіть початок діапазону","");

let b = +prompt("Введіть кінець діапазону","");

let sum = 0; 
while(a<=b){
    sum+=a;
    
    a++;
} 
alert (sum);

// 2 - Запросить 2 числа и найти только наибольший общий делитель.


let num1 = +prompt("Введіть перше число");
let num2 = +prompt("Введіть друге число");

while (num1 != 0 && num2 != 0) {
    if (num1 > num2)
    num1 = num1 % num2;
    else
    num2 = num2 % num1;
}

let result = num1+ num2;
alert(result);

//3-дільники

const number = +prompt("Введіть число");
let result = "";
for (let factor=1; factor<=number/2; factor++) {
     if (number%factor===0) {
         result+=factor+", ";
     }
} 
result+=number;
alert (result);

//4-знайти к-ть цифр

const number = +prompt("Введіть число");
const string = Math.abs(number).toString();
alert (string.length);

//5-вивести числа
let negative = 0;
let positive = 0;
let zero = 0;
let even = 0;
let odd = 0;
for (let i=0; i<10; i++) {
    const numbr = +prompt('Введіть число №'+i);
    if (numbr<0) {
        negative++;
    } else if (numbr>0) {
        positive++;
    } else {
        zero++;
    }
    if (numbr%2===0) {
        even++;
    } else {
        odd++;
    }
}
alert ("negative="+negative+" positive="+positive+" zero="+zero+" even="+even+" odd="+odd);

//6 - калькулятор

do {
    const number1 = +prompt("Введіть число 1");
    const number2 = +prompt("Введіть число 2");
    const operation = prompt("Введіть арифметичну операцію");
    const result = eval(number1+operation+number2);
    alert (result);
} while (confirm ("Будете робити ще наступну дію?"));

//7-запросити числа, і їх посунути

let numb = prompt("Введіть число");
let symbol = prompt("Вкажіть на скільки символів змістити число?");
console.log(numb.slice(symbol) + numb.slice(0, symbol));


//8 - вивести наступний день тижня

    const nameDays = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П"ятниця', 'Субота', 'Неділя'];
    let currentDay = 0;
    while (confirm(`${nameDays[currentDay]}. Вивести наступний день?`)) {
         currentDay = (currentDay + 1) % nameDays.length;

    }


//9  - таблиця множення від 2 до 9.
for (let i = 2; i <= 9; i++) {
    for (let b = 1; b <= 10; b++) {
        console.log(`${i} * ${b} = ${i * b}`);
    }
}









