// 1.function declaration
// We can call the function before declaring.

//function defination
function calcAge1(birthYear){     
   return 2023 - birthYear;    
}
//function call
const age1 = calcAge1(2002);
console.log(age1);



// 2.function expression 
// We can't call a function before declaring it.

const calcAge2 = function (birthYear){
    return 2023 - birthYear;
}
const age2 = calcAge2(1995);
console.log(age2);



//3.Arrow function
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);


//Arrow function with parameters
const yearsUntilRetirement = (birthYear , firstName) => {
    const age4 = 2030 - birthYear;
    const retirement = 65 - age4;
    return (firstName + " retires in " + retirement + " years.")

}
console.log(yearsUntilRetirement(2000,"John"));