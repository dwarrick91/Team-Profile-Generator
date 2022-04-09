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
// join Array of cards into our Html stucture

function generateManagerCard (manager) {
return `<p>${manager.name}</p>`
}
function generateEngineerCard (engineer) {
  return `<p>${engineer.name}</p>`
  }
  function generateInternCard (intern) {
    return `<p>${intern.name}</p>`
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
    <h1 class="display-4 align-content-center text-center bg-info ">Fluid jumbotron</h1>
    
  </div>
</div>
<div class="card-body">
<h5 class="card-title"></h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item"></li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
</ul>
<div class="card-body">
${cardsArray.join("")}`

    
} 

module.exports = generateHtml;