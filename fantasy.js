// Author: FirstName LastName
const READLINE = require("readline-sync");

// global variables
let firstName;Gabriel
let lastName;Conally
let momMaidenName;Edwards
let cityBorn;Berkley, California
let dreamCar;MercedezBenzGClass
let street;MarinaBlvd
let fantasyName;Zachary

/******************************************************************************
                                  getNewFirstName()

  This function returns the user's new first name. To do so, concatenate the
  first 3 letters of their real first name and the first 2 letters of their
  real last name.
*******************************************************************************/
// Funtion 1: Returns the user's new first name.
function getNewFirstName(fName, lName) {
  let first3ofFirstName = fName.substing(0,3);
  let first2ofLastName = lName.substring(0,2);
  return first3ofFirstName + first2ofLastName;
}
getNewFirstName(firstName, lastName);

console.log(getNewFirst)
/******************************************************************************
                                  getNewLastName()

  This function returns the user's new last name. To do so, concatenate the
  first 2 letters of their mom's maiden name and the first 3 letters of the
  city where they were born.
*******************************************************************************/
// Function 2: Returns the user's new last name
function getNewLastName(momMaidenName, cityBorn) {
  let first2ofMomMaidenName = momMaidenName.substring(0,3);
  let first3ofCityBorn = cityBorn.substring(0,4);
  return first2ofMomMaidenName + first3first3ofCityBorn;
}
getNewLastName(momMaidenName, cityBorn);

console.log(getNewLastName)
/******************************************************************************
                                  getTitle()

  This function returns the user's title. To do so, concatenate the last 3
  letters of their real last name, reversed, and the model of their dream car.
*******************************************************************************/
// Function 3: Returns the user's title
function getTitle(lname, Gclass) {
  let last3ofLastNameReversed = lName.substring(3,-1);
  let modelofDreamCar = dreamCar.substring(13,18);
  return last3ofLastNameReversed + modelofDreamCar;
}
getTitle(last3ofLastNameReversed, modelofDreamCar)

console.log(getTitle)
/******************************************************************************
                                  getHonorific()

  This function returns the user's full honorific. To do so, concatenate their
  title, " of ", and the name of the street they live on.
*******************************************************************************/

function getHonorific(getTitle, street) {
  return getTitle + street;
}
getHonorific(getTitle, street)

console.log(getHonorific)
/******************************************************************************
                                     run()

  This function runs the program. At the very least it should ask the user
  to answer a series of questions, each setting one of the global variables
  to what the user typed in. It should then call the functions above to produce
  the user's fantasy name (set fantasyName to that), and display it for the user
  to see.
*******************************************************************************/

function run(getNewFirstName, getNewLastName, getTitle, getHonorific) {

}

// Run the program!
run(getNewFirstName, getNewLastName, getTitle, getHonorific);
