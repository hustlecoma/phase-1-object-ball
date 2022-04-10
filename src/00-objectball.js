function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    "slam dunks": 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    "slam dunks": 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    "slam dunks": 15,
                },
                "Masoon Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    "slam dunks": 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    "slam dunks": 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    "slam dunks": 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    "slam dunks": 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    "slam dunks": 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    "slam dunks": 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    "slam dunks": 12,
                },

            }
        }
    }
}
const object = gameObject();
const players = [];
for (let i in Object.keys(object["home"]["players"])) {
    players.push(Object.keys(object["home"]["players"])[i]);
}
for (let i in Object.keys(object["away"]["players"])) {
    players.push(Object.keys(object["away"]["players"])[i]);
}


function numPointsScored(player) {
    if (object["home"]["players"][player] != undefined) {
        return object["home"]["players"][player]["points"];
    }
    else if (object["away"]["players"][player] != undefined) {
        return object["away"]["players"][player]["points"];
    }
    else {
        return "Player not found";
    }
}


function shoeSize(player) {
    if (object["home"]["players"][player] != undefined) {
        return object["home"]["players"][player]["shoe"];
    }
    else if (object["away"]["players"][player] != undefined) {
        return object["away"]["players"][player]["shoe"];
    }
    else {
        return "Player not found";
    }
}


function teamColors(teamName) {
    if (object["home"]["teamName"] == teamName) {
        return object["home"]["colors"];
    }
    else if (object["away"]["teamName"] == teamName) {
        return object["away"]["colors"];
    }
    else {
        return "Team not found";
    }
}


function teamNames() {
    const nameArray = [];
    nameArray.push(object["home"]["teamName"]);
    nameArray.push(object["away"]["teamName"]);
    return nameArray;
}


function playerNumbers(teamName) {
    let numberArray = [];
    let players = {};
    if (object["home"]["teamName"] == teamName) {
        players = object["home"]["players"];
    }
    else if (object["away"]["teamName"] == teamName) {
        players = object["away"]["players"];
    }
    else {
        return "Team not found";
    }
    for (let i in players) {
        numberArray.push(players[i].number);
    }

    return numberArray;
}


function playerStats(player) {
    if (object["home"]["players"][player] != undefined) {
        return object["home"]["players"][player];
    }
    else if (object["away"]["players"][player] != undefined) {
        return object["away"]["players"][player];
    }
    else {
        return "Player not found";
    }
}


function bigShoeRebounds() {
    let currentPlayer;
    let maxShoePlayer;
    maxShoePlayer = players[0];
    for (let i = 0; i < players.length; i++) {
        currentPlayer = shoeSize(players[i]);
        if (shoeSize(maxShoePlayer) < currentPlayer) {
            maxShoePlayer = players[i];
        }
    }
    return playerStats(maxShoePlayer).rebounds;
}


function mostPointsScored() {
    let currentPlayerPoints;
    let maxPointPlayer;
    let maxPoints;
    maxPoints = playerStats(players[0])["points"];
    maxPointPlayer = players[0];
    for (let i = 0; i < players.length; i++) {
        currentPlayerPoints = playerStats(players[i])["points"];
        if (currentPlayerPoints > maxPoints) {
            maxPoints = currentPlayerPoints;
            maxPointPlayer = players[i];
        }
    }
    return maxPointPlayer;
}


function winningTeam() {
    let pointsHome = [];
    let pointsAway = [];
    for (let i in Object.keys(object["home"]["players"])) {
        pointsHome.push(playerStats(Object.keys(object["home"]["players"])[i]).points);
    }
    for (let i in Object.keys(object["away"]["players"])) {
        pointsAway.push(playerStats(Object.keys(object["away"]["players"])[i]).points);
    }
    pointsHome = pointsHome.reduce(function (total, point) { return total + point }, 0);
    pointsAway = pointsAway.reduce(function (total, point) { return total + point }, 0);
    if (pointsHome > pointsAway) {
        return `Winning team: ${object["home"]["teamName"]} with ${pointsHome} points.`;
    }
    else if (pointsHome < pointsAway) {
        return `Winning team: ${object["away"]["teamName"]} with ${pointsAway} points.`;
    }
    else {
        return "Tie"
    }
}


function playerWithLongestName() {
    let currentPlayerLength;
    let longestNameLength;
    let longestName;
    longestNameLength = players[0].length;
    longestName = players[0];
    for (let i = 0; i < players.length; i++) {
        currentPlayerLength = players[i].length;
        if (longestNameLength < currentPlayerLength) {
            longestNameLength = players[i].length;
            longestName = players[i];
        }
    }
    return longestName;
}


function doesLongNameStealALot() {
    const longestName = playerWithLongestName();
    const longestNameSteals = playerStats(longestName)["steals"];
    let currentPlayer;
    let currentPlayerSteals;
    for (let i = 0; i < players.length; i++) {
        currentPlayer = players[i];
        currentPlayerSteals = playerStats(currentPlayer)["steals"];
        if (currentPlayerSteals > longestNameSteals){
            return false;
        } 
    }
    return true;
}