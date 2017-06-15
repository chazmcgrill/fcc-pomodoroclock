// User Story: I can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed.

var seconds = 60,
    count = 0,
    minBreak = 2,
    minSesh = 2,
    status = 'break',
    pauseFlag = false,
    interval;

// timer function
function timer(min, sec, counter) {

  interval = setInterval(function() {

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

    if (!pauseFlag) {
      console.log(counter + ' second');
      sec--;
      value = display(sec);
      $('.seconds').text(value);
      counter--;
    }

  }, 1000);

}

// function that switches between break and session
function chooser() {
  if (status === 'session') {
    status = 'break';
    count = minBreak * seconds;
    timer(minBreak, seconds, count);
  } else {
    status = 'session';
    count = minSesh * seconds;
    timer(minSesh, seconds, count);
  }
}

// seconds display prefix zero for single digits
function display(val) {
  if (val < 10) {
    val = '0' + val;
  }
  return val;
}


// start / pause button
$('.btn-start').click(function() {
  var thus = $(this).text();
  if (thus === 'Pause') {
    pauseFlag = true;
    $(this).text('Back to work');
  } else if (thus === 'Back to work') {
    pauseFlag = false;
    $(this).text('Pause');
  } else {
    count = minSesh * seconds;
    console.log('minSesh = ' + minSesh);
    $('.btn-elements').prop('disabled', true)
    $(this).text('Pause');
    chooser();
  }
});

// session adjustment buttons
$('.session-plus').click(function() {
  minSesh++;
  $('.minutes').text(minSesh);
  $('.session-num').text(minSesh);
});

$('.session-minus').click(function() {
  minSesh--;
  $('.minutes').text(minSesh);
  $('.session-num').text(minSesh);
});

// break adjustment buttons
$('.break-plus').click(function() {
  minBreak++;
  $('.break-num').text(minBreak);
});

$('.break-minus').click(function() {
  minBreak--;
  $('.break-num').text(minBreak);
});

// reset button resets values to previous start state
$('.reset-btn').click(function() {
  $('.btn-elements').prop('disabled', false);
  status = 'start';
  clearInterval(interval);
  $('.minutes').text(minSesh);
  $('.seconds').text('00');
  $('.btn-start').text('Start');
});
