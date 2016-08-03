// var number = function randomNumber(min, max){
//       return Math.floor(Math.random() * (1 + max - min) + min);
//   };
//
// randomNumber(1, 4);

$(document).ready(function() {

  function randonumber(last, first){
 obj = Math.floor((Math.random() * last) + first);
 return obj;
};

var number = randonumber(6, 1)

  $(".button").click(function() {
    if(number === 1){
      $('.theColor').append('<p>Blue</p>');
    }else if (number ===2) {
        $('.theColor').append('<p>Red</p>');
    }else if (number === 3) {
        $('.theColor').append('<p>Green</p>');
    }else if (number === 4) {
        $('.theColor').append('<p>Pink</p>');
    }else if (number === 5) {
        $('.theColor').append('<p>Purple</p>');
    }else if (number === 6) {
        $('.theColor').append('<p>Grey</p>');
    };
  });
console.log(number);
  $('.box_1').click(function() {
  if(number === 1){
    $(this).append('<p>Right!</p>');
    $('.box_2').click(location.reload());
    $('.box_3').click(location.reload());
    $('.box_4').click(location.reload());
  } else {
    $(this).append('<p>Wrong</p>')
  };
  });

  $('.box_2').click(function() {
  if(number === 2){
    $(this).append('<p>Right!</p>');
    $('.box_3').click(location.reload());
    $('.box_2').click(location.reload());
    $('.box_4').click(location.reload());
  } else {
    $(this).append('<p>Wrong</p>')
  };
  });

  $('.box_3').click(function() {
  if(number === 3){
    $(this).append('<p>Right!</p>');
    $('.box_1').click(location.reload());
    $('.box_2').click(location.reload());
    $('.box_4').click(location.reload());
  } else {
    $(this).append('<p>Wrong</p>')
  };
  });

  $('.box_4').click(function() {
  if(number === 4){
    $(this).append('<p>Right!</p>');
    $('.box_1').click(location.reload());
    $('.box_2').click(location.reload());
    $('.box_3').click(location.reload());
  } else {
    $(this).append('<p>Wrong</p>')
  };
  });

  $('.box_5').click(function() {
  if(number === 5){
    $(this).append('<p>Right!</p>');
    $('.box_1').click(location.reload());
    $('.box_2').click(location.reload());
    $('.box_3').click(location.reload());
  } else {
    $(this).append('<p>Wrong</p>')
  };
  });

  $('.box_6').click(function() {
  if(number === 6){
    $(this).append('<p>Right!</p>');
    $('.box_1').click(location.reload());
    $('.box_2').click(location.reload());
    $('.box_3').click(location.reload());
  } else {
    $(this).append('<p>Wrong</p>')
  };
  });


});
