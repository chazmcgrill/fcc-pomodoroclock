// setTimeout(function() {
//   console.log('i\'m called after 2 seconds');
// }, 2000);
//
// // setInterval(function() {
// //   console.log('every 1 second');
// // }, 1000);
//
// var count = 5;
// var interval = setInterval(function() {
//   if (count === 1) {
//     clearInterval(interval); // clearTimeout for the other function
//     console.log('countdown complete');
//   }
//   count--;
//   console.log(count + 'seconds');
// }, 1000);

var count = 2 * 60,
    interval = setInterval(function(){
      if (count % 60 === 0) {
        console.log('minute');
      } else if (count === 0) {
        clearInterval(interval);
      }
      console.log(count + ' second');
      count--;
    }, 1000);







// setTimeout(function() {
//   console.log('timer complete');
// }, time);
