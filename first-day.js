
//This is how you define variables
var name = "Celine";
var age ="28";


//This fucntion will check whether or not the number is larger than zero
var num = 10-;

if (num > 0){
    console.log('the number is greater than zero');
    console.log('good job');
}
    
    
//functions

/* these 3 different ways of writing functions are not 100% equivalent. 
We will see the differences together later on. 
Use the first one!!
*/
function doSomething(string){  // *Preferred*
    //..code goes here
}
    
var doSomething = finction(string){
    //..code goes here
}

var doSomething = function doSomething(string){
    //..code goes here
}


//Naming

//Store student names
var n;
var name;
var studentName; //camel case *Preferred*
var student_name; //snake case

var PI = 3.14; //use ALL UPPERCASE for constants
var API_URL = "http:api.reddit.com"; //use snake case for constants

//var 1stName; // Cannot start with number

