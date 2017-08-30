// timer animation

var bell = new Audio('assets/bell.mp3'),
    seconds = 60,
    count = 0,
    minBreak = 5,
    minSesh = 25,
    state = 'start',
    pauseFlag = false,
    interval;

// timer function
function timer(min, sec, counter) {

  interval = setInterval(function() {

    // minute countdown filter
    if (counter % 60 === 0) {
      console.log('minute');
      min--;
      $('.minutes').text(min);
      sec = 60;
    // timer complete filter (switches state)
    } else if (!min && counter === 1) {
      clearInterval(interval);
      bell.play();
      chooser();
    }

    // proceed timer if pause flag not false
    if (!pauseFlag) {
      console.log(counter + ' second');
      sec--;
      var value = display(sec);
      $('.seconds').text(value);
      counter--;
    }

  }, 1000);

}

// function that switches between break and session
function chooser() {

  if (state === 'session') {
    state = 'break';
    count = minBreak * seconds;
    timer(minBreak, seconds, count);
    $('.message').text('on break');
  } else {
    state = 'session';
    count = minSesh * seconds;
    timer(minSesh, seconds, count);
    $('.message').text('in session');
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
  var $this = $(this).text();

  if ($this === 'Pause') {
    pauseFlag = true;
    $(this).text('Back to work');
  } else if ($this === 'Back to work') {
    pauseFlag = false;
    $(this).text('Pause');
  } else {
    count = minSesh * seconds;
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
  if (minSesh > 1) {
    minSesh--;
    $('.minutes').text(minSesh);
    $('.session-num').text(minSesh);
  }
});

// break adjustment buttons
$('.break-plus').click(function() {
  minBreak++;
  $('.break-num').text(minBreak);
});

$('.break-minus').click(function() {
  if (minBreak > 1) {
    minBreak--;
    $('.break-num').text(minBreak);
  }
});

// reset button returns values to starting state
$('.reset-btn').click(function() {
  $('.btn-elements').prop('disabled', false);
  pauseFlag = false;
  state = 'start';
  clearInterval(interval);
  $('.minutes').text(minSesh);
  $('.seconds').text('00');
  $('.btn-start').text('Start');
  $('.message').text('press start to begin');
});
