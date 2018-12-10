// var Frame = require('../src/Frame');

describe('Scorecard', function(){
  var scorecard;
  var frame;

  beforeEach(function(){
    scorecard = new scorecard();
    scorecard.create(Frame);
  })

  it("should not allow user to create more than 10 frames"), function() {
    this.frames.
    expect(scorecard.frames.length).toEqual(10);
  };

  it("it should begin game with 0 points", function (){
    scorecard()
    expect(scorecard).toEqual(0);
  })

});
