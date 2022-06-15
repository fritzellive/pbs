var big = document.getElementById("bigtext");
var small = document.getElementById("smalltext");
var img = document.getElementById("image");

let num = Math.floor(Math.random() * 5) + 1;

if(num === 1){
    big.innerHTML = "Good Ending";
    small.innerHTML = "You Now Have All The Potatoes You Want<br>Mission Success!";
    img.innerHTML = `<img style="height: 200px; width: 400px;" src="goodEnding.png">`;
} if(num === 2){
    big.innerHTML = "Bad Ending";
    small.innerHTML = "A Thief Stole All Your Potatoes On The Way Home<br>:(((((( ;-;";
    img.innerHTML = `<img style="height: 200px; width: 400px;" src="badEnding.png">`;
} if(num === 3){
    big.innerHTML = "Neutral Ending";
    small.innerHTML = "When You Came Home The Potatoes Were Expired ._.";
    img.innerHTML = `<img style="height: 200px; width: 400px;" src="neutralEnding.png">`;
} if(num === 4){
    big.innerHTML = "The Worst Ending";
    small.innerHTML = "You Dropped All Your Potatoes On The Way And A Bike Ran Over Them<br>Then A Thunderbolt Hit And OMG They Are All Fuckin Dead";
    img.innerHTML = `<img style="height: 200px; width: 400px;" src="worstEnding.png">`;
} if(num === 5){
    big.innerHTML = "Sussy Ending";
    small.innerHTML = "Daddy Adolf Hitler";
    img.innerHTML = `<img style="height: 200px; width: 400px;" src="susEnding.png">`;
}