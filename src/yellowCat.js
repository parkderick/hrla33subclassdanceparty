var YellowCat = function(top, left, timeBetweenSteps) {
  this.$node = $('<span><img src="src/BrokenKeyBug-size_restricted.gif" class="cat"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.fadeIn('slow');
};
YellowCat.prototype = Object.create(Dancer.prototype);
YellowCat.prototype.constructor = YellowCat;


YellowCat.prototype.step = function () {
  Dancer.prototype.step.call(this);
};
