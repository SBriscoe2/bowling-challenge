$(document).ready(function() {
  var frame = new Frame();

});
  // $('Frame-total').click(function(){
  //       roll1 + roll2
  //       update(thermostat);
  // });
  //
  // $('#temperature-up').click(function(){
  //       thermostat.turnUp();
  //       update(thermostat);
  // });

  //   addFrame(roll1, roll2)
  // $('#frame').submit(function(event) {
  //   event.preventDefault();
  //   var roll1 = $('#roll1').val();
  //   var roll2 = $('#roll2').val();
  //   addFrame(roll1, roll2);
  //   })
  //
  //   function addFrame(roll1, roll2) {
  //     total = roll1 + roll2;
  //     return total;
  //   $('#Frame-total').text(total);
  //   }
$('#roll1').submit(function(){
    frame.roll(roll1);
});


$('#Frame-total').click(function(){
      frame.score();
});
