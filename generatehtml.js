// Loop through Array
// Create Card for each teamMember
// Call getRole() for the teamMember to determine employee type
// if employee type is manager
// then generate manager card
// push manager card into array 

const Manager = require("./lib/manager");

// if employee type is Intern
// then generate Intern card
// push Intern card into array 


// if employee type is Engineer
// then generate Engineer card
// push Engineer card into array 
// join Array of cards into our Html structure



function generateManagerCard (manager) {
  console.log(manager.officeNumber);
return `<section  class="col-sm d-flex justify-content-around">
<div class="card align-self-center shadow-lg p-3 mb-5 bg-white rounded " style="width: 18rem">
<div class="card-body p-3 mb-2 bg-primary text-white ">
<h5 class="card-title bg-blue">${manager.name}</h5>
<p class="card-text">MANAGER</p>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">${manager.id}</li>
<li class="list-group-item">${manager.email}</li>
<li class="list-group-item">${manager.officeNumber}</li>
</ul>
<div class="card-body">
</div>
</section>`
}
function generateEngineerCard (engineer) {
  return `<section  class="col-sm d-flex justify-content-around">
  <div class="card align-self-center shadow-lg p-3 mb-5 bg-white rounded " style="width: 18rem">
  <div class="card-body p-3 mb-2 bg-primary text-white ">
  <h5 class="card-title">${engineer.name}</h5>
  <p class="card-text">ENGINEER</p>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">${engineer.id}</li>
  <li class="list-group-item">${engineer.email}</li>
  <li class="list-group-item">${engineer.github}</li>
  </ul>
  <div class="card-body">
  </div>
  </section>`
  }
  function generateInternCard (intern) {
    return `<section  class="col-sm d-flex justify-content-around">
    <div class="card align-self-center shadow-lg p-3 mb-5 bg-white rounded " style="width: 18rem">
    <div class="card-body p-3 mb-2 bg-primary text-white ">
    <h5 class="card-title">${intern.name}</h5>
    <p class="card-text">INTERN</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${intern.id}</li>
    <li class="list-group-item">${intern.email}</li>
    <li class="list-group-item">${intern.school}</li>
    </ul>
    <div class="card-body">
    </div>
    </section>`
    
    }



function generateHtml (team)  {
  const cardsArray = []
  for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    const role = teamMember.getRole()
    
    if(role === "Manager") {
     cardsArray.push(generateManagerCard(teamMember))
    }
    if(role === "Engineer") {
      cardsArray.push(generateEngineerCard(teamMember))
    }
    if(role === "Intern") {
      cardsArray.push(generateInternCard(teamMember))
    }
  }
   console.log(team);
return`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="Description" content="Enter your description here" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="./assets/css/style.css">
  <title>Team Member profiles</title>
</head>
<div class="jumbotron jumbotron-fluid bg-info">
  <div class="container">
    <h1 class="display-4 align-content-center text-center bg-info ">Team Profile Generator</h1>
    
  </div>
</div>
<section class="row">

${cardsArray.join("")}

</section>`

    
} 

module.exports = generateHtml;