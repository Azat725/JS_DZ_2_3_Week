// 1 задание

let count = promt("Введите сколько раз вывести '#'")
let i = 0

while (i <= count){
    console.log("#");
    i++
}

// 2 задание

let number = prompt("Введите число ")

while(number <= 0){
    console.log(number);
    number--
}

// 3 задание 
let base = parseInt(prompt("Введите число:"));
let exponent = parseInt(prompt("Введите степень:"));
let result = 1;
let i = 0;

while (i < exponent) {
    result *= base;
    i++;
}

console.log(`${base} в степени ${exponent} равно ${result}`);
