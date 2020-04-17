// Вправа 1: Скільки років
let age = prompt("Скільки Вам років?");
if (age<=2) alert("Ти-дитина");
if(age>=12 && age<18) alert("Підросткове покоління");
if(age>=18 && age<60) alert("Ви-доросла людина");
if(age>=60) alert("Ви-людина пенсійного віку");


//Вправа 2: числа 0-9
let number = prompt("Вкажіть число від 0 до 9");
switch (number) {
    case '0': 
      alert(")");
      break;
    case '1': 
      alert("!");
      break;
    case '2': 
      alert("@");
      break;
    case '3': 
      alert("#");
      break;
    case '4': 
      alert("$");
      break;
    case '5': 
      alert("%");
      break;
    case '6': 
      alert("^");
      break;
    case '7': 
      alert("&");
      break;
    case '8': 
      alert("*");
      break;
    case '9': 
      alert("(");
      break;
    default:
        alert("Невідоме значення");       
   
}

// Вправа 3: 2 одн.цифри
let numb = prompt("Введіть трьохзначне число. Перевіримо чи є однакові цифри.")
if (numb[0] == numb[1] && numb[1] == numb[2]) {
  alert ("Всі цифри одинакові");
} else if (numb[0] == numb[1]) {
  alert ("Перша і друга цифри однакові");
} else if (numb[0] == numb[3]) {
  alert ("Перша і третя цифри однакові");
} else if (numb[2] == numb[3]) {
  alert ("Друга і третя цифри однакові");
} else {
  alert("Однакових цифр немає");
}

//Вправа 4 -високосний рік

let year = prompt("Введіть рік");
if (year%400 == 0 || year%4 == 0 && year %100 !== 0) {
    alert ("Рік високосний");
} else {
    alert ("Рік не є високосним.");
}
//5-значне число 
let numbr = prompt('Введіть 5-значне число');
if(numbr[1]==numbr[5]&&numbr[2]==numbr[4]) {
  alert ("Дане число э паліндромом");
} else {
  alert ("дане число не є паліндромом");
}
// 6-конвертер валют
let dollar = prompt("ВВедіть суму в доларах");
let currency = prompt("EUR = 0, UAH = 1, AZN = 2");

switch(currency) {
    case '0':
        alert (dollar*0.92 + 'EUR');
        break;
    case '1':
        alert (dollar*27.21 + 'UAH');
        break;
    case '2':
        alert (dollar*0,59 + 'AZN');
        break;

//7- знижка при покупці

let purchase = +prompt("Вкажіть суму покупки");

if (purchase >= 200 &&purchase < 300) {
    alert("Сума до сплати ${purchase - (purchase * .03)} грн. Знижка становить 3% (${purchase * .03} грн)");
} else if (purchase >= 300 && purchase < 500) {
    alert("Сума до сплати ${purchase - (purchase * .05)} грн. Знижка становить 5% (${purchase * .05} грн)");
} else if (purchase >= 500) {
    alert("Сума до сплати ${purchase - (purchase * .07)} грн.  Знижка становить 7% (${purchase * .07} грн)");
} else {
    alert("Сума до сплати ${purchase} грн.");
}