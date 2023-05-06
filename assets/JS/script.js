// --> Variables
// Selecting gender select
let genderSelect = document.querySelector("#gender-select"),
  // Selecting generator button
  generateBtn = document.querySelector("#generate-btn"),
  container = document.querySelector(".container");

// --> Events
// Event for when click at generateBtn button
generateBtn.addEventListener("click", showingFakeProfile);

// --> Functions
// Function for show fake profile
function showingFakeProfile(response) {
  // User select value
  let userSelGender = genderSelect.value;

  if (!(userSelGender === "select")) {
    if (userSelGender === "male") {
      API("https://api.namefake.com/english-states/male")
    } else {
      API("https://api.namefake.com/english-states/female")
    }

    container.style.display = 'none';

    return (`
    <div class="result">
     <div class="title">
      <h2>Hear your fake profile :</h2>
     </div>
     <div id="fake-id">
      <div class="fake-id">Name: <span>${response.name}</span></div>
      <div class="fake-id">Family: <span>${response.family}</span></div>
      <div class="fake-id">Gender: <span>${userSelGender}</span></div>
      <div class="fake-id">address: <span>${response.address}</span></div>
      <div class="fake-id">Weight: <span>${response.weight}</span></div>
      <div class="fake-id">Phone number: <span></span></div>
      <div class="fake-id">Birthday: <span></span></div>
     </div>
    </div>
    `)

  }else {
    alert('Please Select one gender');
  }
}
