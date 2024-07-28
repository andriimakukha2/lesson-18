console.log('Привыт світ!')

/*
 * #1
 */
let myNum= 10;
let myStr = 'some string';
let myBool = true;
let myArr = [1, 2, 3, 4, 5];
var myObj = {
    first: 'First Name',
    last: 'Last Name'
};

console.log(myNum);
console.log(myStr);
console.log(myBool);
console.log(myArr);
console.log(myObj);

/*
 * #2
 */

myNum= 10;
let decimal2 = myNum.toFixed(2);

console.log(decimal2);


/*
 * #3
 */
let i = 5;


console.log(++i);


console.log(i++);
console.log(i);


console.log(--i);


console.log(i--);
console.log(i);

/*
 * #4
 */

let myTest = 20;

console.log(myTest);

myTest += 10;
console.log(myTest);

myTest -= 5;
console.log(myTest);

myTest *= 2;
console.log(myTest);

myTest /= 4;
console.log(myTest);

myTest %= 3;
console.log(myTest);

/*
 * #5
 */


const myPi = Math.PI;
const myRound = Math.round(89.279);
const myRandom = Math.random() * 10;
const myPow = Math.pow(3, 5);


console.log(myPi);
console.log(myRound);
console.log(myRandom);
console.log(myPow);

/*
 * #6
 */


let strObj = {
    str: "Мама мыла раму, рама мыла маму",
    length: "Мама мыла раму, рама мыла маму".length
};

console.log(strObj.str);
console.log(strObj.length);

/*
 * #7
 */


strObj = {
    str: "Мама мыла раму, рама мыла маму",
    length: "Мама мыла раму, рама мыла маму".length
};

let isRamaPos = strObj.str.indexOf('рама');

let isRama = isRamaPos !== -1;

console.log(isRamaPos);
console.log(isRama);

/*
 * #8
 */

strObj = {
    str: "Мама мыла раму, рама мыла маму",
    length: "Мама мыла раму, рама мыла маму".length
};

let strReplace = strObj.str.replace('мыла', 'моет').replace('рама мыла маму', 'Рама держит маму');

console.log(strReplace);

/*
 * #9
 */

let text = "some STRING";

let upperCaseText = text.toUpperCase();

let lowerCaseText = text.toLowerCase();

console.log(upperCaseText);
console.log(lowerCaseText);