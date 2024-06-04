console.log("Hello, World!");

// This is a single-line comment.
/* 
    This is
    a muti-line
    comment.
*/

// Variables = container/box
/*
    let - mutable/changeable (block-scope level)
    var - mutable/changeable (global-scope level)
    const - unmutable/unchangeble (block-scope level)
*/ 

let firstName = "John";
//camelCase
let last_name = "Doe"
//Snake_Case
console.log("First name:", firstName)
firstName = "David"
console.log("First name:", firstName)

//kebab-case

var lastName = "Doe"
console.log("Last name:", last_name)
lastName = "Smith";
console.log("Last name:", lastName);

const birthday = "01-24-1994"
console.log("Birthday:", birthday)
// birthday = "02-04-1995"; This will not work

/*
    let - mutable/changeable (block-scope level)
    var - mutable/changeable (global-scope level)
    const - unmutable/unchangeble (block-scope level)
*/ 

if (true){
    // Group of statements
    var email = "johndoe@gmail.com";
    // let username = "johndoe423"; This will not work    
}

console.log("Email:", email);
console.log("Username:", username);


// () - Condition Block
// {} - Code Block (Group statesments together)