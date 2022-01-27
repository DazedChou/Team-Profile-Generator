

function generateTeamProfile(response){
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
        <div id="team" class="d-flex flex-wrap justify-content-center">`;

        //ADD TEAM CARDS
        for (let i = 0 ; i < teamCards.length ; i++){
            if (teamCards[i] == 'manager'){
                teamProfile += `
            <div class="card mx-4" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${teamCards[i].name} <br> Manager </h5>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${teamCards[i].id}</li>
                        <li class="list-group-item">EMAIL: ${teamCards[i].email}</li>
                        <li class="list-group-item">Office Number: ${teamCards[i].number}</li>
                      </ul>
                </div>
            </div>`
            }else if(teamCards[i].role == 'Engineer'){
                teamProfile += `
            <div class="card mx-4" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${teamCards[i].name} <br> ${teamCards[i].getRole()} </h5>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${teamCards[i].id}</li>
                        <li class="list-group-item">EMAIL: ${teamCards[i].email}</li>
                        <li class="list-group-item">Github: ${teamCards[i].github}</li>
                      </ul>
                </div>
            </div>`
            }else if(teamCards[i].role == 'Intern'){
                teamProfile += `
            <div class="card mx-4" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${teamCards[i].name} <br> ${teamCards[i].getRole()} </h5>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${teamCards[i].id}</li>
                        <li class="list-group-item">EMAIL: ${teamCards[i].email}</li>
                        <li class="list-group-item">Github: ${teamCards[i].github}</li>
                      </ul>
                </div>
            </div>`
            }
        }

    teamProfile +=`
    
        </div>
    </body>
    
    </html>`

    return teamProfile;
}

module.exports = generateTeamProfile;