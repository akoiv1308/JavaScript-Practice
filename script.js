 // Practice #1 //

/*
let age = 90;
if(age>=90) {
  console.log("You might consider taking a bus");
}
else if(age>=16 || age>=17) {
  console.log("You might want to consider signing-up fr driver education class");
}
else if(age>=18) {
  console.log("You can drive!");
}
else {
  console.log("You cannot drive!");
  console.log("\nYou have to wait " +  (18-age) + " year(s)");
}

switch(age) {
  case 90: console.log("You might consider taking a bus");
}
*/

// Practice #2 //

addOne(5);
addOne(-1);
let coolNumber = 5267;
addOne(coolNumber);

function addOne(num) {
  num+=1;
  console.log("You have now " + num);
}