const teamCards = [];

function htmlGenerator(team) {
    console.log(team);
    for (let i = 0; i < team.length; i++) {
        teamCards.push(cardGenerator(team[i]));
    }

    let teamHtml = '';
    teamCards.forEach( card => { teamHtml += card});

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>

<body>
    <header class="position-relative">
        <h1 class="position-absolute top-50 start-50 translate-middle ">My Team</h1>
    </header>
    <main class="row">
        ${teamHtml}
    </main>

</body>

</html>
    `;
}

function cardGenerator(teamMember) {

    let listItem = ''

    if(teamMember.getRole() == 'Engineer'){
        listItem = `GitHub: ${teamMember.github}`
    }
    else if(teamMember.getRole() == 'Intern'){
        listItem = `School: ${teamMember.school}`
    }
    else{
        listItem = `Office Number: ${teamMember.officeNumber}`
    }

    return `
    <div class="col-2">
            <div class="card" style="width: 15rem;">
                <div class="card-header">
                    <h2>${teamMember.name}</h2>
                    <h3>${teamMember.getRole()}</h3>
                </div>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${teamMember.id}</li>
                    <li class="list-group-item">Email: ${teamMember.email}</li>
                    <li class="list-group-item">${listItem}</li>
                </ul>
            </div>
        </div>
    `;
}

module.exports = htmlGenerator;