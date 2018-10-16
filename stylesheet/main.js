
 function insert(num){
    document.Calculator.inputedValue.value = document.Calculator.inputedValue.value+num
    
}

function c(){
    document.Calculator.inputedValue.value = "";
    document.Calculator.result.value = "";
}

function run() {
    var inputedValue = document.Calculator.inputedValue.value;
    var power = inputedValue.toString().length; /**Find the length of the value**/
    var alldigits = []; /** array to hold the singular digits making up the number**/
    var result = [];
    power = parseInt(power); /** convert back to integer for further operations**/
    digits = inputedValue.toString() /** convert value to back to string **/
    for(let i=0;i<digits.length;i++) 
    {
    alldigits.push(parseInt(digits[i])) /** append each digit to array **/
    }
    for(let i=0;i<alldigits.length;i++)
    {
    result.push(Math.pow(alldigits[i],power));
    }
    var sum = result.reduce(add, 0); /**sum up the numbers in result **/
    function add(a, b) {
    return a + b;
     }
    
    if(sum == inputedValue){
        document.Calculator.result.value = inputedValue + " is narcissitic "
    }else {
        document.Calculator.result.value = inputedValue + " is not narcissitic "
    }
}
      

    