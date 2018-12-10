describe('Frame', function() {
  var game;

    beforeEach(function() {
      game = new Frame();
    });

  var multipleRoll = function(pins, rolls){
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };

  it("it should begin game with 0 points", function (){
    expect(game.score()).toBe Empty;
  })

  it("it can score a gutter game", function(){
    multipleRoll(0, 20);
    expect(game.score()).toBe(0);
  });

  it("it can score all ones", function (){
    multipleRoll(1, 20);
    expect(game.score()).toBe(20);
  })

  it("it can score a spare", function (){
    game.roll(3);
    game.roll(7);
    game.roll(5);
    multipleRoll(0,17);
    expect(game.score()).toBe(20);
  })

  it("it can score a strike", function (){
    game.roll(10);
    game.roll(2);
    game.roll(3);
    multipleRoll(0,16);
    expect(game.score()).toBe(20);
  })

  it("it can score a perfect game", function (){
    multipleRoll(10,12);
    expect(game.score()).toBe(300)
  })

  it("it can score a game of bowling", function (){
    game.roll(10);
    game.roll(4);
    game.roll(6);
    game.roll(10);
    game.roll(0);
    game.roll(0);
    game.roll(1);
    game.roll(4);
    game.roll(7);
    game.roll(9);
    multipleRoll(0,8);
    expect(game.score()).toBe(71)
  })



});
  // var roll1;
  // var roll2;

  // beforeEach(function() {
  //   frame = new Frame();
  // });

  // it("should be able to produce the sum of 2 rolls", function(){
  //   frame = new Frame(3,4);
  //   expect(frame.total(3,4)).toEqual(7);
  // });
  //
  // it("should be able to total a gutter frame as 0", function () {
  //   frame = new Frame(0, 0);
  //   expect(frame.total(0, 0)).toEqual(0);
  // });
  //
  // it("should not allow more than two rolls in each frame", function() {
  //   frame = new Frame(2, 6, 1);
  //   expect(frame.validation(2, 6, 1)).toEqual("You can only enter two rolls");
  // });
