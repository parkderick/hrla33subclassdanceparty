// Creates and returns a new dancer object that can step
var Dancer = function (top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps
  this.step();
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
}

Dancer.prototype.step = function () {
  var bound = makeBlinkyDancer.prototype.oldStep.bind(this)
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(bound, this.timeBetweenSteps);
  // this.step()
};

Dancer.prototype.setPostion = function (top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  // var styleSettings = {
  //   top: top,
  //   left: left
  // };
  // this.$node.css(styleSettings)
  this.setPosition(top, left);
};


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body