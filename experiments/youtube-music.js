let song = "https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3";
document.getElementById('audiotag1').src = song;
let audio = document.getElementById('audiotag1');
let playOrPaused = "paused";
audio.onloadedmetadata = function() {
  /*
  alert(audio.duration); */
};
/* Above is test code */
function changePlayButton(){
  if(document.getElementById("playbutton").className=="fas fa-play"){
    document.getElementById("playbutton").className = "fa fa-pause";
  }else{
    document.getElementById("playbutton").className = "fa fa-play";
  }
}
function changePlayState(){
  if (playOrPaused == "paused") {
    playOrPaused = "play";
    changePlayButton();
    document.getElementById('audiotag1').play();
    console.log("state set to " + playOrPaused);
  } else if (playOrPaused == "play") {
    playOrPaused = "paused";
    document.getElementById('audiotag1').pause();
    console.log("state set to " + playOrPaused);
    console.log(document.getElementbyId('audiotag1').duration())
  }
}
