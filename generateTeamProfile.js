const instManager = (manager) => {
    return `
    <div class="card mx-4" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${manager.name} <br> Manager </h5>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.id}</li>
                        <li class="list-group-item">EMAIL: ${manager.email}</li>
                        <li class="list-group-item">Office Number: ${manager.number}</li>
                      </ul>
                </div>
            </div>`
}

const instEngineer = (engineer) => {
    return `
    <div class="card mx-4" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${engineer.name} <br> ${engineer.role} </h5>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.id}</li>
                        <li class="list-group-item">EMAIL: ${engineer.email}</li>
                        <li class="list-group-item">Github: ${engineer.github}</li>
                      </ul>
                </div>
            </div>`
}

const instIntern = (intern) => {
    return `
    <div class="card mx-4" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${intern.name} <br> ${intern.role} </h5>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.id}</li>
                        <li class="list-group-item">EMAIL: ${intern.email}</li>
                        <li class="list-group-item">School: ${intern.school}</li>
                      </ul>
                </div>
            </div>`
}

//obj is an array of objects
generatePage = (objArray) => {
    let cards = '';
    for (let i = 0 ; i < objArray.length ; i++){
        const employee = objArray[i];
        const role = employee.getRole();

        if(role == "Manager"){
            const managerCard = instManager(employee)
            cards += managerCard;
        }
        if(role == "Engineer"){
            const engineerCard = instEngineer(employee)
            cards += engineerCard;
        }
        if(role == "Intern"){
            const internCard = instIntern(employee)
            cards += internCard;
        }
        
    }
    const generateTeam = generateTeamProfile(cards);
    return generateTeam;
}

function generateTeamProfile(cards){
    var teamProfile = `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="styles.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>
            Team Profile Generator
        </title>
    </head>
    
    <body style="background-color: bisque;">
        <div class="jumbotron bg-dark m-4 p-4 text-center text-white">
            <h1 class="display-4">My Team</h1>
        </div>
        <div id="team" class="d-flex flex-wrap justify-content-center">
            ${cards}
        </div>
    </body>
    
    </html>`

    return teamProfile;
}

module.exports = generatePage;