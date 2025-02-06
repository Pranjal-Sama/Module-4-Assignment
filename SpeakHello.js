// STEP 2: Wrap the entire contents of SpeakHello.js inside an IIFE
(function (window) {
  var speakWord = "Hello";

  // STEP 3: Create an object, called 'helloSpeaker'
  var helloSpeaker = {};

  // STEP 4: Attach the speak method to helloSpeaker object
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose the helloSpeaker object to the global scope
  window.helloSpeaker = helloSpeaker;

})(window);
