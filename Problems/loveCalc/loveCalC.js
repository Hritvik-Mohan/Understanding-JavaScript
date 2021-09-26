prompt("What is your Name?");
prompt("What is their Name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore)

if(loveScore > 70){
    alert("Your love score is "+loveScore+"% You love each other like Kanye loves Kanye.");
}
else {
    alert("Your love score is "+loveScore+"%");
}