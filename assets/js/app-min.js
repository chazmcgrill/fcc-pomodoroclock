function timer(e,t,s){interval=setInterval(function(){s%60!=0||pauseFlag||(e--,$(".minutes").text(e),t=60),pauseFlag||(t--,$(".seconds").text(zeroPrefixer(t)),s--,timerCircle(s)),0===e&&0===t&&(clearInterval(interval),bell.play(),chooser())},1e3)}function chooser(){"session"===state?stateUpdater("break",minBreak,count,"on break"):stateUpdater("session",minSesh,count,"in session")}function stateUpdater(e,t,s,a){state=e,s=t*seconds,resetCircle(e),circleSetup(s,e),timer(t,seconds,s),$(".message").text(a)}function zeroPrefixer(e){return(e<10?"0":"")+e}function circleSetup(e,t){circleData.deg=360/e,circleData.mid=e/2,circleData.sesh=t,circleData.angle=circleData.deg,circleData.totalTime=e}function timerCircle(e){rotateCircle(e),console.log("countVal = "+e),console.log(circleData),e===circleData.mid?(circleData.angle=circleData.deg,$(".right.mask").css("z-index","2")):circleData.angle+=circleData.deg}function rotateCircle(e){e>=circleData.mid?$(".left.mask").css("transform","rotate("+circleData.angle+"deg)"):$(".right.mask").css("transform","rotate("+circleData.angle+"deg)")}function resetCircle(e){colourSwap(e),$(".left.mask").css("transform","rotate(0deg)"),$(".right.mask").css("transform","rotate(0deg)"),$(".right.mask").css("z-index","0")}function colourSwap(e){"break"===e?($(".mask").addClass("overlay-mask"),$(".circle").addClass("overlay-circle")):($(".mask").removeClass("overlay-mask"),$(".circle").removeClass("overlay-circle"))}var bell=new Audio("assets/bell.mp3"),seconds=60,count=0,minBreak=5,minSesh=25,state="start",pauseFlag=!1,interval,circleData={};$(".btn-start").click(function(){var e=$(this).text();"Pause"===e?(pauseFlag=!0,$(this).text("Back to work")):"Back to work"===e?(pauseFlag=!1,$(this).text("Pause")):(count=minSesh*seconds,$(".btn-elements").prop("disabled",!0),$(this).text("Pause"),chooser())}),$(".session-plus").click(function(){minSesh++,$(".minutes").text(minSesh),$(".session-num").text(minSesh)}),$(".session-minus").click(function(){minSesh>1&&(minSesh--,$(".minutes").text(minSesh),$(".session-num").text(minSesh))}),$(".break-plus").click(function(){minBreak++,$(".break-num").text(minBreak)}),$(".break-minus").click(function(){minBreak>1&&(minBreak--,$(".break-num").text(minBreak))}),$(".reset-btn").click(function(){$(".btn-elements").prop("disabled",!1),pauseFlag=!1,state="start",clearInterval(interval),$(".minutes").text(minSesh),$(".seconds").text("00"),$(".btn-start").text("Start"),$(".message").text("press start to begin"),resetCircle("reset")});