var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
    // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


makeBlinkyDancer.prototype.oldStep = function () {
  // this.step();
  this.$node.toggle();
  this.step();
};
// incorporate the step fucntion from normal dancer to blinky dancer





// should call step at least once per secondâ€£
// AssertionError: expected 0 to equal 1sinon.spy(blinkyDancer, 'step');
// expect(blinkyDancer.step.callCount).to.be.equal(0);
// clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
// clock.tick(timeBetweenSteps);

// expect(blinkyDancer.step.callCount).to.be.equal(1);

// clock.tick(timeBetweenSteps);
// expect(blinkyDancer.step.callCount).to.be.equal(2);


/*
    // call the old version of step at the beginning of any call to this new version of step
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
*/