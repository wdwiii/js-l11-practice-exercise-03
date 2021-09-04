"use strict";

//Selects ul with a class of .not-registered
const notRegistered = document.querySelector(".not-registered");

//Function Nottes
//Fetch API data and declare a new varible to parse fetched data
const getRegistrationData = async function () {
  const request = await fetch(
    "https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json"
  );
  const data = await request.json();

  //Function Notes
  //1. Loop through each student in the array
  //2. If the student's registration key has a value of 'no':
  //3. Create a list item element
  //4. Make the text content of the list item the student name
  //5. Apend the list item to the unordered list with the class name of .not-registered
  const displayContactList = function (data) {
    data.forEach((data) => {
      if (data.registered === "no") {
        let student = document.createElement("li");
        student.textContent = data.name;
        notRegistered.append(student);
      }
    });
  };

  //Call the 'displayContactList' function inside of the 'getRegistrationData' function with a param of 'data'
  displayContactList(data);
};

getRegistrationData();
