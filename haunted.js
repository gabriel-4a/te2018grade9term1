const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: Alex ,
  courage: 3,
  intellect: 6,
  strength: 4,
  charm: 5,
  weapon: "pocket knife",
  item: "flashlight",
};

console.log();
console.log("*** WELCOME TO THE HOUSE PARTY ***");
player.name = READLINE.question("What is your name?: Alex ");
console.log(`${player.name} stands in front of a modern-styled mansion addressed 665 Hellstone Rd..`);
console.log(`${player.name} hears teens who are too young to know what a long island ice tea is having the time of their live.`);
let enterHouse = READLINE.question("After continplating the consiquences of getting drunk of high, will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their dignity and opens the door...`);
  // continue the story

} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door.`);
  // continue the story

}
console.log("Thanks for playing!");
