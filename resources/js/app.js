var minCount = 2,
    secCount = 60,
    count = 0,
    minBreak = 2,
    status = 'break';

// use the same timer switch between work and break
// timer(min, sec, count);

// timer function
function timer(min, sec, counter) {

  var interval = setInterval(function(){

    if (counter % 60 === 0) {
      console.log('minute');
      min--;
      $('.minutes').text(min);
      sec = 60;
    } else if (!min && counter === 1) {
      clearInterval(interval);
      console.log('timer complete');
      chooser();
    }

    console.log(counter + ' second');
    sec--;
    $('.seconds').text(sec);
    counter--;

  }, 1000);

}

function chooser() {

  if(status === 'session') {
    status = 'break';
    count = minBreak * secCount;
    timer(minBreak, secCount, count);
  } else {
    status = 'session';
    count = minCount * secCount;
    timer(minCount, secCount, count);
  }

}

$('.btn-start').click(function() {
  count = minCount * secCount;
  chooser();
});


$('.session-plus').click(function() {
  minCount++;
  $('.minutes').text(minCount);
  $('.session-num').text(minCount);
});

$('.session-minus').click(function() {
  minCount--;
  $('.minutes').text(minCount);
  $('.session-num').text(minCount);
});

$('.break-plus').click(function() {
  minBreak++;
  $('.break-num').text(minBreak);
});

$('.break-minus').click(function() {
  minBreak--;
  $('.break-num').text(minBreak);
});
