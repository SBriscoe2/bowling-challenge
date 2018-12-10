describe('Scorecard', function() {
  var scorecard;
  var frame;
  var roll1;
  var roll2;
  var score;
  var addFrame;
  var addTotal;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("should be able to create a new frame", function() {
    expect(scorecard.frame()).toEqual(10);
  });

  it("should be able to show a score", function() {
    expect(scorecard.score()).toEqual(0);
  });

  it("should return the score roll1", function(){
    expect(scorecard.roll1(3)).toEqual(3);
  });

  it("should return the score roll2", function(){
    expect(scorecard.roll2(10)).toEqual(10);
  });

  it("should be able to produce the sum of 2 rolls", function(){
    scorecard.roll1(3);
    scorecard.roll2(10);
    expect(scorecard.addFrame()).toEqual(13);
  });

  // it("should be able to count frames starting from 1", function(){
  //   scorecard.frame();
  //   scorecard.frame();
  //   scorecard.frame();
  //   scorecard.frame();
  //   expect(scorecard.frame()).toEqual(4)
  // });

  it("should be able to calculate the total on 1 frame", function(){
    expect(scorecard.addFrame()).toEqual(13)
  });

  it("should be able to sum total of individual frames", function(){
    expect(scorecard.addTotal()).toEqual(20)
  });

  it("should be able to result of 0 score game", function(){
    for(var i = 0; i< 10; i++){
      scorecard.roll1(0);
      scorecard.roll2(0);
    }
    expect(scorecard.final()).toEqual("Wow, a gutter game")
  });

  it("should be able to show result of 100 score game", function(){
    for(var i = 0; i < 10; i++){
          scorecard.roll1(10);
          scorecard.roll2(10);
          scorecard.addFrame();
        }
    expect(scorecard.final()).toEqual("Wow, a Perfect Game")
  })
  //
  // it("should be able to add upto 10 frames", function(){
  //   function frame(roll3, roll){};
  //
  // });

});
