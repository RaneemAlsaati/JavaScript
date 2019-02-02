
// function emptyObject(){
//     let object = {};
//     object.time = 12
//     return object;
// }
// var timeObject = emptyObject();
// console.log(timeObject);


// function myColor (color1, color2, color3){
//     var myColor = [{color:color1},{color:color2},{color:color3}];
//     for(let i=0;i<colorObjects.length;i++)
//     console.log(myColor[i].color);
//     return myColor;

// }

    
//  var myColor =  colorObjects('red', 'blue', 'yellow')
// console.log(colorObjects[i]);

function emptyObject(){
    // 2. Returns it
    return {
        time : 12
    };
}
//  3. Saves it  1. Calls it
var timeObject = emptyObject();
console.log(timeObject.time);

function myFunction(color1, color2, color3){
    return [{
        color : color1
    },
    {
        color : color2
    }, 
    {
        color : color3
    }]
}
var colorObjects = myFunction("red", "blue", "green");
console.log(colorObjects);

for(let i=0; i < colorObjects.length;i++){
    console.log(colorObjects[i].color)
}

console.log(colorObjects[0].color);

var weekdays=new Array(7);
weekdays[0]="Sunday";
weekdays[1]="Monday";
weekdays[2]="Tuesday";
weekdays[3]="Wednesday";
weekdays[4]="Thursday";
weekdays[5]="Friday";
weekdays[6]="Saturday";
 var today = new Date().getDay();
 var daysToMeet = 4;
 var meetingOn = weekdays[1];
 console.log("Today is:" + weekdays[today]);
console.log("How many days to meet :" + daysToMeet);
console.log("We are meeting on : " + meetingOn);

var notes = [];
function addNote (note, noteId){
    notes.push({
        noteId:noteId,
        note:note
    });
}
addNote("hej", 0);
addNote("vi ses", 1);
console.log(notes);