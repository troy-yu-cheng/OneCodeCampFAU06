// Operators and Expressions

// 1. Arithmetic Operators
let num1 = 10
let num2 = 6

// Addition '+' - sum
let sum = num1 + num2;
console.log("Sum:", sum);

// Subtraction '-' - difference
let difference = num2 - num1;
console.log("Difference:", difference);

// Mutiplication '*' - product
let product = num1 * num2;
console.log("Product:", product);

// Division '/' - quotient
let quitient = num2 / num1;
console.log("Quotient:", quitient);

// Exponent '**' - exponent
let exponent = num1 ** num2;
console.log("Exponent:", exponent)

// Remainder '%' Modulo - remainder
let remainder = num1 % num2;
console.log("Remainder:", remainder);

// Order of Operations
// PEMDAS / BODMAS

let answer = 3 + 4 *(5 - 2) ** 2;
console.log("Answer:", answer);




// 2. Comparison Operators


// Equal to '==': Check if two values are equal
console.log("5 == 5:", 5 == 5)
console.log("5 == '5':", 5 == "5")
console.log("'hello' == 'world':", "hello" == "world");


// Not Equal to '!=': Check if two values are not equal
console.log("5 != 5:", 5 != 5);
console.log("5 != '5':", 5 != "5"); // convert the string to a number
console.log("'hello' != 'world':", "hello" != "world");


// Strict Equal to '===': Check if two values are equal in value and type
console.log("5 === 5:", 5 === 5)
console.log("5 === '5':", 5 === "5")
console.log("'hello' === 'world':", "hello" === "world");


// Strict not Equal to '===': Check if two values are not equal in value and type
console.log("5 !== 5:", 5 !== 5)
console.log("5 !== '5':", 5 !== "5")
console.log("'hello' !== 'world':", "hello" !== "world");

// Greater Than '>'
console.log("5 > 3:", 5 > 3); // true
console.log("3 > 5:", 3 > 5); // false

// Less Than '<'
console.log("5 < 3:", 5 < 3); // false
console.log("3 < 5:", 3 < 5); // true

// Greater Than or Equal to '>='
console.log("5 >= 5:", 5 >= 5); // true
console.log("5 >= 3:", 5 >= 3); // true
console.log("3 >= 5:", 3 >= 5); // false

// Less Than or Equal to '>='
console.log("5 <= 5:", 5 <= 5); // true
console.log("5 <= 3:", 5 <= 3); // false
console.log("3 <= 5:", 3 <= 5); // true


// 3. Logical Operator
// AND - &&
// OR - ||
// NOT - !

/*
| A     | B     | NOT A | A AND B | A OR B |
|-------|-------|-------|---------|--------|
| true  | true  | false | true    | true   |
| true  | false | false | false   | true   |
| false | true  | true  | false   | true   |
| false | false | true  | false   | false  |
*/

let sunny = true;
let warm =  false;

console.log("Is it sunny AND warm?", sunny && warm)
console.log("Is it sunny OR warm?", sunny || warm)
console.log("Is it NOT sunny?", !sunny)
console.log("Is it sunny AND NOT warm?", !sunny && warm)


// 4. Assignment Expression
let num3 = 10;
let num4 = 5;

// Addtion '+='
// num3 = num3 + num4
num3 += num4
// Computation: 
console.log("The new value of num3:", num3)

// Subtraction '-='
num3 -= num4;
// Computation: 15 - 5 = 10
console.log("The new value of num3:", num3);

// Multiplication '*='
num3 *= num4;
// Computation: 10 * 5
console.log("The new value of num3:", num3);

// Division '/='
num3 /= num4;
// Computation: 50 / 5
console.log("The new value of num3:", num3);

// Exponent '**='
num3 **= num4;
// Computation: 10 ** 5 = 100000
console.log("The new value of num3:", num3);

// Remaider '%='
num3 %= num4;
// Computation: 50 / 5
console.log("The new value of num3:", num3);
