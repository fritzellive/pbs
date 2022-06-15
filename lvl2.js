var potatotext = document.getElementById("potatoes");
var moneytext = document.getElementById("money");
var lvl2to3 = document.getElementById("level2to3");

var potato = 0;
var money = 500;

function buy(){
    if(money > 50 || money === 50){
    money -= 50;
    potato += 1;
    potatotext.innerHTML = `I Have ${potato} Potatoes<br>Now`;
    moneytext.innerHTML = `Your Balance Is ${money}$ Sir`;
    } else if(money < 50){
        moneytext.innerHTML = "You Don't Have Enough<br>Money Sir";
        setTimeout(() => {moneytext.innerHTML = `Your Balance Is ${money}$ Sir`;}, 3000);
    }
}

function sell(){
    if(potato > 1 || potato === 1){
        money += 75;
        potato -= 1;
        potatotext.innerHTML = `I Have ${potato} Potatoes<br>Now`;
        moneytext.innerHTML = `Your Balance Is ${money}$ Sir`;
    } else if(potato < 1){
        moneytext.innerHTML = "You Don't Have Any<br>Potatoes Sir";
        setTimeout(() => {moneytext.innerHTML = `Your Balance Is ${money}$ Sir`;}, 3000);
    }
}

function steal(){
    let chance = Math.floor(Math.random() * 3) + 1;
    if(chance === 1){
        potato += 1;
        potatotext.innerHTML = `I Have ${potato} Potatoes<br>Now`;
    } else if(chance !== 1){
        money -= 100;
        moneytext.innerHTML = `How Dare You<br>Steal From Me?!<br>GIVE 100$ TO ME!`;
        setTimeout(() => {moneytext.innerHTML = `Your Balance Is ${money}$ Sir`;}, 3000);
    }
}

setInterval(function(){
    //this code runs every second.
    if(potato === 20){
        lvl2to3.style.display = "block";
    }
    if(money < 0){
        document.getElementById("thing").style.display = "none";
        document.getElementById("lose").style.display = "block";
    }
}, 100);