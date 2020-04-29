(function(name){
var byeSpeaker ={};
var speakWord = "Good Bye";
    byeSpeaker.speak=function speak(name) {
  console.log(speakWord + " " + name);
}
  name.byeSpeaker = byeSpeaker;
})
 (name);
