var gameData = {
    version: 0.03,
    gameTicks: 0,
    gameDay: 1,
    gameMoon: 1,
    gameYear: 1,
    peepsVegeto: 5,
    peepsReddy: 0,
    peepsBizzy: 0,
    peepsSentry: 0,
    peepsBlu: 0,
    jobFarmer: 0,
    jobGatherer: 0,
    resourceFood: 0,
    resourceWood: 0
}

function workFarmer(){
    gameData.resourceFood += 2 * gameData.jobFarmer
}

function workGatherer(){
    gameData.resourceWood += 1 * gameData.jobGatherer
}

function gameTick(){
    gameData.gameTicks += 1
}

function addFarmer(){
    if(gameData.peepsVegeto >= 1){
        gameData.jobFarmer += 1
        gameData.peepsVegeto -= 1
        document.getElementById("peepsVegeto").innerHTML = "Vegeto: " + gameData.peepsVegeto
        document.getElementById("jobFarmer").innerHTML = "Farmers: " + gameData.jobFarmer
    }
}

function subFarmer(){
    if(gameData.jobFarmer >= 1){
        gameData.jobFarmer -= 1
        gameData.peepsVegeto += 1
        document.getElementById("peepsVegeto").innerHTML = "Vegeto: " + gameData.peepsVegeto
        document.getElementById("jobFarmer").innerHTML = "Farmers: " + gameData.jobFarmer
    }
}

function addGatherer(){
    if(gameData.peepsVegeto >= 1){
        gameData.jobGatherer += 1
        gameData.peepsVegeto -= 1
        document.getElementById("peepsVegeto").innerHTML = "Vegeto: " + gameData.peepsVegeto
        document.getElementById("jobGatherer").innerHTML = "Gatherers: " + gameData.jobGatherer
    }
}

function subGatherer(){
    if(gameData.jobGatherer >= 1){
        gameData.jobGatherer -= 1
        gameData.peepsVegeto += 1
        document.getElementById("peepsVegeto").innerHTML = "Vegeto: " + gameData.peepsVegeto
        document.getElementById("jobGatherer").innerHTML = "Gatherers: " + gameData.jobGatherer
    }
}

function checkDate(){
    if (gameData.gameTicks % 10 == 0){
        gameData.gameDay += 1
    }
    if (gameData.gameTicks % (28*10) == 0){
        gameData.gameMoon += 1
        gameData.gameDay = 1
    }
    if (gameData.gameTicks % (4*28*10) == 0){
        gameData.gameYear += 1
        gameData.gameMoon = 1
    }
}
/*
function mineGold(){
    gameData.gold += gameData.goldPerClick
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
}

function buyGoldPerClick() {
    if (gameData.gold >= gameData.goldPerClickCost) {
        gameData.gold -= gameData.goldPerClickCost
        gameData.goldPerClick += 1
        gameData.goldPerClickCost *= 2
        document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
    }
}
*/

var mainGameLoop = window.setInterval(function() {
    gameTick()
    workFarmer()
    workGatherer()
    checkDate()
    refreshDisplay()
}, 200)

function refreshDisplay(){
    document.getElementById("peepsVegeto").innerHTML = "Vegeto: " + gameData.peepsVegeto
    document.getElementById("peepsSentry").innerHTML = "Sentry: " + gameData.peepsSentry
    document.getElementById("peepsReddy").innerHTML = "Reddy:  " + gameData.peepsReddy
    document.getElementById("peepsBizzy").innerHTML = "Bizzy:  " + gameData.peepsBizzy
    document.getElementById("peepsBlu").innerHTML = "Blu:    " + gameData.peepsBlu

    document.getElementById("jobFarmer").innerHTML = "Farmers: " + gameData.jobFarmer
    document.getElementById("jobGatherer").innerHTML = "Gatherers: " + gameData.jobGatherer

    document.getElementById("resourceFood").innerHTML = "Food: " + gameData.resourceFood
    document.getElementById("resourceWood").innerHTML = "Wood: " + gameData.resourceWood

    document.getElementById("ticks").innerHTML = "Ticks: " + gameData.gameTicks

    document.getElementById("date").innerHTML = "Day " + gameData.gameDay + ", Moon " + gameData.gameMoon + ", Year " + gameData.gameYear
}

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("peeperSave", JSON.stringify(gameData))
    document.getElementById("event").innerHTML = "Game Saved on Date " + gameData.gameDay + "/" + gameData.gameMoon + "/" + gameData.gameYear
}, 60000)

function deleteSave(){
    localStorage.removeItem("peeperSave")
}

var saveGame = JSON.parse(localStorage.getItem("peeperSave"))
//if (saveGame !== null) {
if (saveGame.version !== gameData.version){
    if (typeof saveGame.gameTicks !== "undefined") gameData.gameTicks = saveGame.gameTicks
    if (typeof saveGame.peepsBizzy !== "undefined") gameData.peepsBizzy = saveGame.peepsBizzy
    if (typeof saveGame.peepsBlu !== "undefined") gameData.peepsBlu = saveGame.peepsBlu
    if (typeof saveGame.peepsReddy !== "undefined") gameData.peepsReddy = saveGame.peepsReddy
    if (typeof saveGame.peepsSentry !== "undefined") gameData.peepsSentry = saveGame.peepsSentry
    if (typeof saveGame.peepsVegeto !== "undefined") gameData.peepsVegeto = saveGame.peepsVegeto
    
    if (typeof saveGame.jobFarmer !== "undefined") gameData.jobFarmer = saveGame.jobFarmer
    if (typeof saveGame.jobGatherer !== "undefined") gameData.jobGatherer = saveGame.jobGatherer

    if (typeof saveGame.resourceFood !== "undefined") gameData.resourceFood = saveGame.resourceFood
    if (typeof saveGame.resourceWood !== "undefined") gameData.resourceWood = saveGame.resourceWood

    if (typeof saveGame.gameDay !== "undefined") gameData.gameDay = saveGame.gameDay
    if (typeof saveGame.gameMoon !== "undefined") gameData.gameMoon = saveGame.gameMoon
    if (typeof saveGame.gameYear !== "undefined") gameData.gameYear = saveGame.gameYear

    if (typeof saveGame.resourceWood !== "undefined") gameData.resourceWood = saveGame.resourceWood
    if (typeof saveGame.resourceWood !== "undefined") gameData.resourceWood = saveGame.resourceWood
    

    //if (typeof saveGame. !== "undefined") gameData. = saveGame. 
    //gameData = saveGame
} else {
    gameData = saveGame
}