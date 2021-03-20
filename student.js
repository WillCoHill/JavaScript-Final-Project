const myName = "Cody";
const classDescription = "JavaScript CS 190";
let d = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let theMonth = months[d.getMonth()];
let theDate = (theMonth + " " + d.getDate());
let customertype = 'direct';

let displayInfo = function() {
   alert(myName + ": " + classDescription + ": " + theDate);     
};

let confirmlink = linkname => {
   if (confirm("Are you sure you want to jump to " + linkname + "?"))
        location = linkname;
}

// declare this variable outside of your functions
currentspecial = 1     // selects which item that is "on special"

function displayspecial() {

   if (currentspecial == 1) {
      alert("The current special is #1");
   }
   if (currentspecial == 2)  {
      alert("The current special is #2");
   }
   if (currentspecial == 3 )  {
      alert("The current special is #3");
   }
   currentspecial = currentspecial + 1
   if (currentspecial > 3) {
     currentspecial = 1
   }
}

const changetype = () => {
   let newtype;
   if(customertype == 'direct') {
      newtype = 'advertising';
   }
   if(customertype == 'advertising') {
      newtype = 'subscription';
   }
   if(customertype == 'subscription') {
      newtype = 'direct';
   }
   customertype = newtype;
   alert('Customer type has been changed to: ' + customertype);
}

const displaytype = () => {
   if (customertype == 'direct') {
      alert('Buy Now! From this web page! My children need new shoes!');
   }
   if (customertype == 'advertising') {
      alert('Support our advertisers! Click on an ad, so I can make money!');
   }
   if (customertype == 'subscription') {
      alert('Renew your subscription today! My children need medicine!');
   }
}

const getName = () => {
   let name = prompt('What is your name?: ');
   if (name.length < 5) {
      alert("You have a short name la.");
   } else if (name.length < 10) {
      alert("You have a medium name, comrade.");
   } else if (name.length > 10) {
      alert("holy moly, you have a LONG name.");
   }
   document.getElementById("name").innerHTML = name;
}

const getAge = () => {
   let age = prompt('What is your age?: ');
   if (age < 18) {
      alert("You are but a child, lad/lass");
   } else if (age < 50) {
      alert("You are an adult.");
   } else if (age > 50) {
      alert("You are a senior citizen.");
   } 
   document.getElementById("age").innerHTML = age;
}

const getBreaks = () => {
   let myString = "";
   do {
     number1 = prompt("Enter a number from 1 to 5: ");
   } while (number1 > 5 || number1 < 1 || number1 == null);
   for (let i = 0; i < number1; i++) {
     myString += "<br>";
   }
   alert(myString);
   document.getElementById("breaks").innerHTML = myString;
}

const getCards = () => {
   let myString = "";
   do {
     number1 = prompt("Enter a number from 2 to 7: ");
   } while (number1 > 7 || number1 < 2 || number1 == null);
   for (let i = 0; i < number1; i++) {
     myString += ("<span id='card" + i +"'>Card #" + i + " </span>");
   }
   alert(myString);
   document.getElementById("cards").innerHTML = myString;
}
