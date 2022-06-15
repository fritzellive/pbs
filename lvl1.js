var potatotext = document.getElementById("potatoes");
var moneytext = document.getElementById("money");
var lvl1to2 = document.getElementById("level1to2");

var potato = 0;
var money = 1000;

function buy(){
    if(money > 100 || money === 100){
    money -= 100;
    potato += 1;
    potatotext.innerHTML = `I Have ${potato} Potatoes<br>Now`;
    moneytext.innerHTML = `Your Balance Is ${money}$ Sir`;
    } else if(money < 100){
        moneytext.innerHTML = "You Don't Have Enough<br>Money Sir";
        setTimeout(() => {moneytext.innerHTML = `Your Balance Is ${money}$ Sir`;}, 3000);
    }
}

function sell(){
    if(potato > 1 || potato === 1){
        money += 150;
        potato -= 1;
        potatotext.innerHTML = `I Have ${potato} Potatoes<br>Now`;
        moneytext.innerHTML = `Your Balance Is ${money}$ Sir`;
    } else if(potato < 1){
        moneytext.innerHTML = "You Don't Have Any<br>Potatoes Sir";
        setTimeout(() => {moneytext.innerHTML = `Your Balance Is ${money}$ Sir`;}, 3000);
    }
}

function follow(){
    money += 1;
    moneytext.innerHTML = "W";
    setTimeout(() => {moneytext.innerHTML = `Your Balance Is ${money}$ Sir`;}, 3000);
}

setInterval(function(){
    //this code runs every second.
    if(potato === 10){
        lvl1to2.style.display = "block";
    }
}, 100);