# Homework

## Why should i even do this homework?
Functions and conditions are some of the basic building blocks of javascript. Functions ensure that we dont repeat ourselves when writing code. Conditions ensures that we can handle different cases when programming.

## Javascript warmup
Just like last homework, lets **warmup our brain**!

Do these freecodecamp challenges. We know this seems like a lot, but the tasks are not so big, so hang in there! If you get stuck on one of the tasks, just go to the next and then return to the difficult task later on.

- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/passing-values-to-functions-with-arguments/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/passing-values-to-functions-with-arguments/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/understanding-undefined-value-returned-from-a-function/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/assignment-with-a-returned-value/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/global-scope-and-functions/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/introducing-else-if-statements/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/logical-order-in-if-else-statements/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/chaining-if-else-statements/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-for-loops/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-odd-numbers-with-a-for-loop/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-odd-numbers-with-a-for-loop/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-through-an-array-with-a-for-loop/

Please add your freecodecamp username as answer for this exercise!

---

## Step 3: Smart-ease - Goes Global!
Following the massive success of Smart-ease's first couple of products things have been quite hectic at Smart-ease's shared office space. The phone is constantly ringing from journalists wanting to interview the genius behind the success and the greatest developers want to work for you. [Wired](www.wired.com) wrote an article with the headline "Smart-ease as good as Smarties"

BUT people are asking: What will be the next product that truly defines Smart-ease as the startup of the century?

### Flight booking fullname function
Even for a startup as successful as Smart-ease there needs to be money in the bank. A customer from a flight booking website has asked for our help creating a specific part of their application:
When a user books a flight they **write their firstname and surname**, but when the ticket is printed a **fullname should be displayed**. It is our responsibility to create that.

Create a function called `getFullname` that returns a fullname. 
It should have two parameters: `firstname` and `surname`. 

```js
getFullname('Benjamin', 'Hughes'); // returns "Benjamin Hughes"
```

Now try to create two variables `fullname1` and `fullname2` these two variables should be assigned to the return of calling the `getFullname` function. 

Log out the two fullnames.

#### Formal fullname
On the flight website the user has the possibility to **check a checkbox** that **indicates** if the user wants to be **adressed formally**. Lets also change `getFullname` to include support for formal name. 

Create an extra parameter `useFormalName` that is a boolean. If it is true the function should add a `Lord` in front of the name. 

```js
getFullname('Benjamin', 'Hughes', true); // returns "Lord Benjamin Hughes"`
getFullname('Benjamin', 'Hughes', false); // returns "Benjamin Hughes"
```

What do we do if `useFormalName` is not defined?

### Event application
Another customer has contacted us. He works for a secret company that rimes with foogle. The customer works on their calendar application. They need some functionality to help with writing what weekday an event is held. 

You specify how many days from today an event is being held. The function then figures out what weekday the event is being held. Here is an example:

Today is Sunday and the event is in 5 days. Therefore the event will be held on a friday.

```js
// With todays weekday a tuesday
console.log(getEventWeekday(9)); // Logs out "Thursday"

// With todays weekday a Friday
console.log(getEventWeekday(2)); // Logs out "Sunday"
```

You should get the today's day from the system.  

Hint: use remainder operator, array indexes and investigate new Date in js. 

### What if i just walked
> Traveling to a new place is fantastic when flying. It only takes a short amount of time and is very convenient. Imagine not being able to fly, but you had to walk to your destination. How long time would that take? lets find out:

Lets create a function that given 2 coordinates returns the transport duration in hours. The transportation types can be: Fly, train, car, bike, walking, jumping, walking and doing the [worm](https://www.youtube.com/watch?v=Y8mmBGWv9iM)

![worm dance](https://media.giphy.com/media/xT1R9LX7DnsCzHquTS/giphy.gif)

Here is an example of two coordinates. To find lat and lon use [this site](https://www.latlong.net/) 
- *Copenhagen*: 55.686111, 12.565661
- *Århus*: 56.153362, 10.215830

The function should have 5 parameters: `lat1`, `lon1`, `lat2`, `lon2` and `transportationType`

| Transport type | Speed in km/h |
|-------------|----------------|
| Fly | 800 |
| train |200 |
| Car | 100 |
| Bike | 12 |
| Walk | 5 |
| Jump | 3 |
| Crawl | 1 |
| [Worm](https://www.youtube.com/watch?v=Y8mmBGWv9iM) | 0.1 |

Use the following code from [stackoverflow](https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates-shows-wrong) to get the distance in km between two coordinates

```js
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    dLat = toRad(lat2-lat1);
    dLon = toRad(lon2-lon1);
    lat1 = toRad(lat1);
    lat2 = toRad(lat2);

    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const d = R * c;
    
    return d;
}

// Converts numeric degrees to radians
function toRad(Value) {
    return Value * Math.PI / 180;
}

const cphToAarhurDist = getDistance(55.686111, 12.565661, 56.153362, 10.215830);
console.log(cphToAarhurDist); // logs out 155.3500706998908

```

Calling the function with a given lat1, lon1, lat2, lon2 and a transportation type should return the time in hours it would take to travel that distance.

Try calling the function on some different coordinates.

#### Get nicely printed time *optional*
Instead of just returning the number of hours in a decimal point. Lets return the string with the relevant transportation time: "Your transportation time will be 3 hours and 23 minutes". 

### Candy helper
> We are at the candystore. We have taken some shovels of the **caramel-strawberry-cola-lemon-gravy winegums**, a few of the **banana chocolate diesel-motors** and a handful of the **salmon-potato covered toffee encrusted pizzas**. But what is all this worth? And can you even afford it? 

Let's solve this problem with some functions. 

#### addCandy function
Create a function called `addCandy`. It has two parameters:
- `candy` - specifies the candy type. Could be 'sweet, chocolate, toffee or chewing-gum'
- `weight` - specifies the weigth of the candy in grams

The function should add the price of the candy to an array called `boughtCandy` using [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 

Here is an example of the usage:

```js
addCandy('sweet', 20); // Adds the price of 20 grams of sweets to the array boughtCandy
```

Candy table prices

| Candy type | Price per gram |
|-------------|----------------|
| Sweet | 0.5 |
| Chocolate | 0.7 |
| Toffee | 1.1 |
| Chewing-gum | 0.03 |


#### Can i buy more?
Now create a variable called `amountToSpend` and assign it to `Math.random() * 100`. You can read about `Math.random` [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

Now create a new function called `canBuyMoreCandy`. This function returns a boolean indicating if the user can buy more candy using the `boughtCandy` array. 

Try use the function by adding some pieces of candy and checking if you can buy more. 

If the user can buy more the `console.log` the following: "You can buy more, so please do!"

If the user cant buy more `console.log` the following: "Enough candy for you!"

Hint: Use a for loop to calculate the total price of the candy pieces. 

*Optional* Use a [while loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) instead of a for loop.

#### Add candy and check if the user can buy more *optional*
Create a function where the user try and add some candy. what parameters should it have? 

If the user has funds, add the piece of candy using the `addCandy` function and log out the following "Please keep shopping for candy". How can we check if the user has enough funds?

If the user does not have enough funds, do not add the candy and log out the following "You can not add more candy"

## Step 4: Rover the Robot *Optional*
Go and try out this cool game: [roverjs.com](http://roverjs.com), written by one of the HYF teachers from Amsterdam, [Joost Lubach](https://github.com/joost). There are different levels. Solve the chapter up until and including the variables chapter. There might be a small price for completing that!

## Step 5: Hand in Homework:
Steps:
* Use the ```hyf-homework``` repo and add your homework files in the ```javascript/javascript1/week2``` folder
* If you dont have the repo, fork it from here: https://github.com/HackYourFuture-CPH/hyf-homework
* Make your commits for the homework. Remember to seperate the code into meaningful commits!
* Push the changes to github
* To finish the homework:
  * Fill in the form for the relevant week. The link to the form can be found at the top of your classes slack channel. 
  * Share the github link to your classes slack channel. 
---

And thats it your are done 🎉