
    
    function getFullname(firstname, surname, useFormalName){
        if (useFormalName){
      return fullname= "Lord " + firstname + " " + surname;
        }
     else {
        return (firstname + " " + surname)
     } 
}
    

console.log(getFullname("Raneem","Alsaati", true));

console.log(getFullname("Raneem", "Alsaati"));
 
var weekdays=new Array(7);

weekdays[0]="Sunday"; 
weekdays[1]="Monday";
weekdays[2]="Tuesday";
weekdays[3]="Wednesday";
weekdays[4]="Thursday";
weekdays[5]="Friday";
weekdays[6]="Saturday";

var today = new Date();
 
 var getEventWeekday = 5;
 
 var Dday = weekdays[5];

console.log("Today is:" + weekdays[0]);
console.log("How many days to event :" + getEventWeekday);
console.log("Event should be on : " + Dday);

function Weather (temperature) {
    if (temperature = 18) {

        return "Shorts and T-shirt";

    }
    els (temperature <= 0)
    
        return " sweater"
}
const clothesToWear = Weather(18);
console.log(clothesToWear);

const class07Students = ["Raneem", "wesam","Jan", "Emile", "Emil", "Naya"];
function addStudentToClass(studentName) {
    if (class07Students.length < 6 || studentName === "queen"){
    class07Students.push(studentName);
}
else if (studentName === "Raneem"){
    console.log( "Student Raneem is already in the class")
}
else if (studentName === ""){
    console.log ("cannot add empty string")
}
}
function getNumberOfStudents() {

    return class07Students.length;
}
console.log(getNumberOfStudents ());

addStudentToClass("Maysam");
addStudentToClass("Raneem");
addStudentToClass("queen");
addStudentToClass ("");

var boughtCandyPrices = [];

function addCandy(candyType, weight) {
 if (Candytype ===Sweet ) {
     return 

 }  
}