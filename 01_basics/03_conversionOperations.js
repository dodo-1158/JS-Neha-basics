let score = 33
let score1 = "33"
let score2= "33abc"
let score3= "neha"
let score4= undefined
let score5= null
let score6= true

console.log(typeof score);      //score=33  so number
console.log(typeof (score1));  // score1="33" so string ......typeof can be written with or without parentesis
console.log(typeof score2);    //score2="33abc" so string
console.log(typeof score3)
console.log(typeof score4)
console.log(typeof score5)
console.log(typeof score6)


console.log("score4",score4)
console.log("score5", score5)
console.log("score6", score6)


//we are converting score1="33" into **NUMBER** and storing it in valueInNumber
let valueInNumber= Number(score1)
console.log(typeof (valueInNumber));  


//converting "33abc" into number
let conversion= Number(score2)   
console.log(typeof (conversion));  //since we have converted it into number the tyoe will be NUMBER
console.log(conversion);  //The output is showing NaN i.e Not a Number


//score 3 is a string so it cannot be converted into a number--- OUTPUT==NaN
let convertScore3= Number(score3)
console.log(typeof (convertScore3));  
console.log(convertScore3);

//SUMMARY for conversion into NUMBER DATATYPE
// "33" => 33 
// "33abc" => NaN
// true => 1    false=>0


let isLogged= 1

let booleanisLogged= Boolean(isLogged)
console.log(booleanisLogged)

// isLogged Values           Outputs
//    1                      true
//    0                      false
//    ""                     false
//   "Neha"                  true

let someNumber= 44
let stringsomeNumber= String(someNumber)
console.log(stringsomeNumber);
console.log(typeof stringsomeNumber);


