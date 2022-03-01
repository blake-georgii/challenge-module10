const teamCards = [];

function htmlGenerator(team) {
    console.log(team);
    for (let i = 0; i < team.length; i++) {
        teamCards.push(cardGenerator(team[i]));
    }

    return 'test';
}

function cardGenerator() {
    return 'test';
}

module.exports = htmlGenerator;