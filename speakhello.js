(function(name){
    var helloSpeaker = {};
    var speakWord = "Hello";
    helloSpeaker.speak=function speak(name) {
        console.log(speakWord + " " + name);
    }
    name.helloSpeaker = helloSpeaker;
})
(name);
