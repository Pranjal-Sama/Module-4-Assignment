// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside an IIFE
(function (window) {
  var speakWord = "Good Bye";

  // STEP 7: Create an object, called 'byeSpeaker'
  var byeSpeaker = {};

  // STEP 8: Attach the speak method to byeSpeaker object
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose the byeSpeaker object to the global scope
  window.byeSpeaker = byeSpeaker;

})(window);
