const buttonColors=["red","blue","yellow","green"];
const gamePattern=[];
let userClickedPattern=[];
var final=false;
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
var flag=true;
var level="Level";
$(document).on("keypress",function() {
  if(flag==true) {
    nextSequence();
  }
  flag=false;
})
var i=0;
function nextSequence() {
  $("h1").text(level+" "+i);
  i=i+1;
  randomNumber=Math.floor(Math.random()*4);
  randomChosenColor=buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  userClickedPattern=[];

}
$(".btn").on("click",function() {
  userChosenColor=this.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  checkAnswer(userClickedPattern[userClickedPattern.length-1]);
})
function checkAnswer(currentLevel) {
  if(currentLevel==gamePattern[gamePattern.length-1]) {

    if(gamePattern.length==userClickedPattern.length) {
      final=true;
      setTimeout(nextSequence,1000);
    }
    console.log("success");
  }
  else {
      $("h1").text("Wrong Sequence! Click Restart...");
  }
}

$(".restart").on("click",function() {
  window.location.reload();
})
