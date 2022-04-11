// Loop through Array
// Create Card for each teamMember
// Call getRole() for the teamMember to determine employee type
// if employee type is manager
// then generate manager card
// push manager card into array 



// if employee type is Intern
// then generate Intern card
// push Intern card into array 


// if employee type is Engineer
// then generate Engineer card
// push Engineer card into array 
// join Array of cards into our Html structure



function generateManagerCard (manager) {
  console.log(manager.officeNumber);
return `<section  class="col-sm col-md-4 d-flex justify-content-center">
<div class="card align-self-center shadow-lg p-3 mb-5 bg-white rounded " style="width: 18rem">
<div class="card-body p-3 mb-2 bg-primary text-white ">
<h5 class="card-title bg-blue">${manager.name}</h5>
<p class="card-text"><i class="fa-solid fa-mug-hot"></i>MANAGER</p>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">ID: ${manager.id}</li>
<li class="list-group-item" ><a class="text-color"  href="mailto:${manager.email}">Email: ${manager.email}</a></li>
<li class="list-group-item">Office #: ${manager.officeNumber}</li>
</ul>
<div class="card-body">
</div>
</section>`
}
function generateEngineerCard (engineer) {
  return `<section class="col-sm col-md-4 d-flex justify-content-center">
  <div class="card align-self-center shadow-lg p-3 mb-5 bg-white rounded " style="width: 18rem">
  <div class="card-body p-3 mb-2 bg-warning text-white ">
  <h5 class="card-title">${engineer.name}</h5>
  <p class="card-text"><i class="fa-solid fa-helmet-safety"></i>ENGINEER</p>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${engineer.id}</li>
  <li class="list-group-item" ><a class="text-color"  href="mailto:${engineer.email}">Email: ${engineer.email}</a></li>
  <li class="list-group-item"><a class="text-color"  href="https://github.com/${engineer.github}">GitHub: ${engineer.github}</a></li>
  </ul>
  <div class="card-body">
  </div>
  </section>`
  }
  function generateInternCard (intern) {
    return `<section  class="col-sm col-md-4 d-flex justify-content-center">
    <div class="card align-self-center shadow-lg p-3 mb-5 bg-white rounded " style="width: 18rem">
    <div class="card-body p-3 mb-2 bg-success text-white ">
    <h5 class="card-title">${intern.name}</h5>
    <p class="card-text"><i class="fa-solid fa-graduation-cap"></i>INTERN</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.id}</li>
    <li class="list-group-item" ><a class="text-color"  href="mailto:${intern.email}">Email: ${intern.email}</a></li>
    <li class="list-group-item">School: ${intern.school}</li>
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
  <script src="https://kit.fontawesome.com/0d277fa621.js" crossorigin="anonymous"></script>

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