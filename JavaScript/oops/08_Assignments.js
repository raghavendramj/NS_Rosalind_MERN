var myInterval; 
function everyTime() {
  let durationSpan = document.getElementById("duration"); 
  durationSpan.innerHTML = stopWatch.endTime ? stopWatch.endTime.getTime()/1000 + stopWatch.duration : stopWatch.duration;
  //console.log("stopWatch.duration :- ", stopWatch.duration);
  if(stopWatch.endTime){
    //console.log("stopWatch.duration :- ", stopWatch.endTime.getTime()/1000 + stopWatch.duration);
  }else{
    durationSpan.innerHTML  = stopWatch.duration;
    //console.log("stopWatch.duration :- ", stopWatch.duration);
  }
}

function stopwatch() {
  var startTime,
    endTime,
    running,
    duration = 0; //Private Variables

  this.start = function () {
    if (running) {
      throw new Error("Stop watch already started!");
    }
    running = true;
    //console.log("Current duration at start :- ", duration);
    startTime = new Date();
    myInterval = setInterval(everyTime, 1);
  };

  this.stop = function () {
    if (!running) {
      throw new Error("Stop watch not started!");
    }
    running = false;
    endTime = new Date(); //This will fetch the current data and time.
    const durationCompleted = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += durationCompleted;
    document.getElementById("currentDuration").innerHTML = duration;
    //console.log("Current duration at stop :- ", duration);
    clearInterval(myInterval);
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
    clearInterval(myInterval);
    document.getElementById("duration").innerHTML = 0;
    document.getElementById("currentDuration").innerHTML = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      if (endTime == null && startTime == null) {
        return 0;
      }
      let till = running ? new Date() : endTime;
      const seconds = (till.getTime() - startTime.getTime()) / 1000;
      document.getElementById("currentDuration").innerHTML = duration;
      return seconds;
    },
  });
}

var stopWatch = new stopwatch();
