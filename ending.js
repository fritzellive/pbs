var big = document.getElementById("bigtext");
var small = document.getElementById("smalltext");
var img = document.getElementById("image");

let num = Math.floor(Math.random() * 3) + 1;

if(num === 1){
    big.innerHTML = "Good Ending";
    small.innerHTML = "You Are A Genius, You Have A Great Brain";
    img.innerHTML = `<img style="height: 200px; width: 400px;" src="maidGoodEnding.png">`;
} if(num === 2){
    big.innerHTML = "Bad Ending";
    small.innerHTML = "You Are A Loser, You Are Now Gay";
    img.innerHTML = `<img style="height: 200px; width: 400px;" src="maidBadEnding.png">`;
} if(num === 3){
    big.innerHTML = "??? Ending";
    small.innerHTML = "You Became His B!tch And Uh... I Can't Explain"
    img.innerHTML = `<img style="height: 200px; width: 400px;" src="maididkEnding.png">`;
}