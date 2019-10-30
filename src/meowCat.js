var MeowCat = function(top, left, timeBetweenSteps) {
  this.$node = $('<span><img src="src/17xo.gif" class="image"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
};

MeowCat.prototype = Object.create(Dancer.prototype);
MeowCat.prototype.constructor = MeowCat;





