var Frame = function(roll1, roll2) {
this.MAXIMUM_SCORE = 10
this.roll1 = roll1;
this.roll2 = roll2;
this.frames = []
this.ROLLCOUNT = 3
}

Frame.prototype.total = function() {
  total = this.roll1 + this.roll2;
  return total;
};

Frame.prototype.validation = function() {
  if (this.ROLLCOUNT > 2) {
    throw new Error ("You can only enter two rolls");
  }
};

Frame.prototype.roll = function() {
  this.frames.push(roll1,roll2);
}




// var Game = function() {
//   this.scorecard = [];
// }
//
// Game.prototype.roll = function(roll1, roll2) {
//   frame = new Frame(roll1, roll2);
//   this.scorecard.push(frame);
//
// }
//  Game.prototype.score = function(){
//    return this.scorecard.reduce(function(roll1,roll2))
//  }
// module.exports = Frame;
