# Homework

## Why should i even do this homework?
Array's has lots of helper functions, that is used all the time when developing js applications. It is super helpful to be able to **manipulate an array** like **removing elements** or **adding elements** at specific indexes. Another helpful function of arrays is to know **where a specific item is** in the array.

Objects can be used for **representing data** and it can **help structure your code**. An object can fx represent a user that has a firstname, surname, profile picture and a list of friends. It is constantly used in javascript and **essential to learning the language**.

## Javascript warmup

Its warmup time!

![Warm up](https://media.giphy.com/media/Cfw4WE617UgUw/giphy.gif)
### Freecodecamp exercises

- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/build-javascript-objects/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-dot-notation/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-bracket-notation/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/updating-object-properties/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/add-new-properties-to-a-javascript-object/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/using-objects-for-lookups/

Please add your freecodecamp username as answer for this exercise!

---

### Item array removal

```js

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomNumber = parseInt(Math.random() * 11);

// Write some code here

```
Copy the above code to your homework

1. Remove the item in `numberArray` that is equal to `randomNumber`
1. *Optional* create a variable `numbersToRemove`. In a loop remove the number of items equal to `numbersToRemove`.

---

### Series duration of my life

```js
const seriesDurations = {
  'Game of thrones': {
    days: 3,
    hours: 1,
    minutes: 0,  
  },
  'Sopranos': {
    days: 3,
    hours: 14,
    minutes: 0,
  },
  'The Wire': {
    days: 2,
    hours: 12,
    minutes: 0,
  },
}
```

How much time of my life have i been watching series? Lets find out! Calculate **how much time a series** have taken as a **percentage of an average lifespan** of 80 years.

Firstly change the `seriesDurations` object to include your favorite series. Find the duration of a series here: http://tiii.me/

Using the `seriesDurations` log out the text:

```
Game of thrones took 0.01% of my life
Sopranos took 0.012% of my life
The Wire took 0.007% of my life

In total that is 0.2% of my life
```

*Hint: Use object.keys to iterate an object*

### My favorite songs

Lets create some js where you can add songs from a list of available songs to your own list of songs you like.


```js

const availableSongs = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little',
    artist: 'The spies girls',
  },
];

const mySongs = [];

function notThisNameCallItSomethingElse(songTitle) {

}

console.log(notThisNameCallItSomethingElse('3 nails in wood')); // should add the second item in the array to mySongs

```

Firstly add some songs to availableSongs that you like.

create a function with one parameter `songTitle`. Calling the function with a song title will add corresponding song object from `availableSongs` to `mySongs`.

## Step 3: Smart-ease - Back to the basics!
Smart-ease is going back to the basics. As always Smart-ease starts by helping people fix their problems. So lets venture out into the real world and see what we find:

### NOnoN0nOYes (Note taking app)
> You are sitting at a meeting. A person is presenting some interesting thought that you want to write down. You check your bag, but realise that you forgot to bring your notepad. Hmm you check the internet for an online solution. But you need to signup for them all, too bad... Maybe this could be a worthwhile problem so solve. Lets create a simple and easy to use notepad 📝

#### Save a note
The first thing we will create is the functionality to save a note:
Create a variable called ```notes``` and assign it to an empty array.
Create a function called ```addNote```. The ```addNote``` has two parameters: ```note``` and ```noteId```. The ```note``` parameter is a string. and the ```noteId``` is a number.
The ```addNote``` function shall push an object to the notes array. This object has two keys: note and noteId, that corresponds to the parameters. The value of the keys should be the value of the corresponding parameters. 

#### Get a note
Now a user can add a note, but what if a user wants to see a specific note, but only remembers the id? Lets create that functionality for him:
Create a function called ```getNoteFromId```. The function has one parameter called ```id```. When calling this function with an id it should return the relevant note object that corresponds to the id. If no id is specified or if the id is not a number, log out an error string. 
Hint: Use a for loop.

#### Read all notes
Now a user can both add and get a note. What if the user just wants to read all his notes? Lets also create that functionality:
Create a function ```showAllNotes```. When calling it the function should log this string out for every note:
"The note with id: 1, has the following note text: "some example note"."

#### Unique feature
Suddenly you get this great idea for making the note app even better! 

Come up with a unique feature you think would make this app better. Write down the idea and see if you can implement it. If it is too hard to implement try and ask in the slack channel :)

### CactusIO-interactive (Smart phone usage app)
> After a long day you come home to relax. The first thing you do is find your phone and start watching some youtube. Then check facebook, and then reading some news. Suddently a hour has passed. What happened to all that time you think to yourself. Maybe we can create some program to help with this problem! What if we could help users manage their smart phone usage?

Its going to work like this: A user can add smartphone activities. Then he can see a status on how his smartphone usage is going. 


#### Adding an activity
Lets create the first part of the functionality that is adding activities.

Create a variable called ```activities``` that stores all activities of the day. What type of variable would you think would make sense?
Create a function called ```addActivity```. It should have three parameters: ```date```, ```activity``` and ```duration```. The ```date``` should be a string, the ```activity``` a string and the ```duration``` a number. To save the activity push an object that contains the date, the activity and the duration to the activities variable. 

Now a user can add an activity by writing:

```js
addActivity('23/7-18', 'Youtube', 30);

/*
activities should now look like this
[{
    date: '23/7-18',
    activity: 'Youtube',
    duration: 30,
}]
*/
```

Just adding activities wont help the user very much, we need to add some functionality to show the user how his smart phone usage is going.


#### Show my status
Create a function called ```showStatus```. This function should use the activities variable and return a string saying the following:
"You have added 3 activities. They amount to 78 min. of usage"
```
showStatus(activities); // will log out this "You have added 3 activities. They amount to 78 min. of usage"
```
Now what happens if we call ```showStatus``` and ```activities``` is empty? We need to take that into consideration: If ```activities``` is empty log out a string that says: "Add some activities before calling showStatus"

#### Usage limit
A user asks us if it is possible to set a limit for his smartphone usage. "Off course it is" we promptly reply! 
We need to store that limit somewhere, but where and what type should this be?
So how should it work? When ```showStatus``` is called and the users usage is above the limit he set. Log out the following string: "You have reached your limit, no more smartphoning for you!"

#### Extra feature
Come up with one feature you think would be helpful for this program.

Optional
* Lets improve the ```addActivity```, so that we dont need to specify the date, but the function automatically figures out what the date is. Check out this link: https://stackoverflow.com/a/34015511
* Improve the ```showStatus``` function by only showing the number of actitivies for that specific day.
* Create a function for calculating the activity a user has spent the most time on.

---

## Step 4 bonus homework
the Bonus homework for this week (for those of you want an extra challenge) do the following:

Go to http://roverjs.com/ and complete the functions and arrays chapters. 

## Step 5: Hand in Homework:
Go over your homework one last time:

- Does every file run without errors and with the correct results?
- Have you used `const` and `let` and avoided `var`?
- Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- Is your code well-formatted (see [Code Formatting](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md))?

If you can answer yes to the above questions then you are ready to hand if the homework:
* Find the hyf-homework git repo (forked from [here](https://github.com/HackYourFuture-CPH/hyf-homework))
* Add your homework files in the Javascript/javascript1/week3 folder
* To finish the homework use the link in the top of your classes slack channel. 

---

🎉
