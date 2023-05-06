// --> Variables
// Selecting gender select
let genderSelect = document.querySelector("#gender-select"),
  // Selecting generator button
  generateBtn = document.querySelector("#generate-btn"),
  // Selecting container
  container = document.querySelector(".container"),
  // Selecting body
  body = document.querySelector("body");

// --> Events
// Event for when click at generateBtn button
generateBtn.addEventListener("click", genderCheck);

// --> Functions
// Function for show fake profile
function genderCheck() {
  // User select value
  let userSelGender = genderSelect.value;

  // Set condition for userSelGender
  if (!(userSelGender === "select")) {
    if (userSelGender === "male") {
      API("https://api.namefake.com/english-states/male").then((response) => {
        body.innerHTML = showProfile(response, userSelGender);
      });
    } else {
      API("https://api.namefake.com/english-states/female").then((response) => {
        body.innerHTML = showProfile(response, userSelGender);
        console.log(response);
      });
    }

    // Change container display
    container.style.display = "none";
  } else {
    alert("Please Select one gender");
  }
}

// Function for create result page
function showProfile(response, userSelGender) {
  return `
  <div class="result">
   <div class="title">
    <h2>Hear your fake profile :</h2>
   </div>
   <div id="fake-id">
    <div class="fake-id">Name : <span>${response.name}</span></div>
    <div class="fake-id">Gender : <span>${userSelGender}</span></div>
    <div class="fake-id">Age : <span>${response.bonus}</span></div>
    <div class="fake-id">address : <span>${response.address}</span></div>
    <div class="fake-id">Weight : <span>${response.weight}</span></div>
  <div class="fake-id">Phone number : <span>${response.phone_h}</span></div>
    <div class="fake-id">Birthday : <span>${response.birth_data}</span></div>
   </div>
  </div>
  `;
}
