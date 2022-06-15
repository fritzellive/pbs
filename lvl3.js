var gamemessage = document.getElementById("games");

var potatotext = document.getElementById("potatoescounter");
var gametext = document.getElementById("gamescounter");
var finish = document.getElementById("finishbutton");

var potato = 0;
var game = 10;

function buy(){
    if(game > 2 || game === 2){
    game -= 2;
    potato += 1;
    potatotext.innerHTML = `Your Potatoes: ${potato}`;
    gametext.innerHTML = `Your Games: ${game}`;
    } else if(game < 2){
        gamemessage.innerHTML = "YOU DON'T HAVE<br>ANY GAMES!!";
        setTimeout(() => {gamemessage.innerHTML = "Give Games";}, 3000);
    }
}

function savesta(){
    let chance = Math.floor(Math.random() * 5) + 1;
    if(chance === 1){
        potato += 5;
        potatotext.innerHTML = `Your Potatoes: ${potato}`;
    } if(chance !== 1){
        document.getElementById("thing").style.display = "none";
        document.getElementById("savestalose").style.display = "block";
    }
}

function steal(){
    let chance = Math.floor(Math.random() * 3) + 1;
    if(chance === 1){
        game += 2;
        gametext.innerHTML = `Your Games: ${game}`;
    } else if(chance !== 1){
        game -= 1;
        gametext.innerHTML = `Your Games: ${game}`;
        gamemessage.innerHTML = `How Dare You<br>Steal From Me?!<br>GIVE 1 GAME TO ME!`;
        setTimeout(() => {gamemessage.innerHTML = "Give Games";}, 3000);
    }
}

setInterval(function(){
    //this code runs every second.
    if(potato === 15){
        finish.style.display = "block";
    }
    if(game < 0){
        document.getElementById("thing").style.display = "none";
        document.getElementById("lose").style.display = "block";
    }
}, 100);