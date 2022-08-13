// Create stopwatch
// Private Variables -> 1. startTime, endTime, running, duration
// 1. Start
// 2. Stop
// 3. Reset
// 4. duration -> the current duration

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
    console.log("Current duration at start :- ", duration);
    startTime = new Date();

  };

  this.stop = function () {
    if (!running) {
      throw new Error("Stop watch not started!");
    }
    running = false;
    endTime = new Date(); //This will fetch the current data and time.
    const durationCompleted = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += durationCompleted;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      if (endTime == null && startTime == null) {
        console.log("Stopwatch was never started or it has got reseted!");
        return;
      }
      let tillNow = running ? new Date() : endTime;
      var tillNowSeconds = duration > 0 ? duration : (tillNow.getTime() - startTime.getTime()) / 1000;
      return tillNowSeconds;
    },
  });
}

var stopWatch = new stopwatch();
