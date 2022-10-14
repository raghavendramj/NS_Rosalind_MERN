const EventEmitter = require("events");
const emitter = new EventEmitter();
//1. Define an event
//2. What will happen on that event?
//3. Trigger tha event

// 2. What will happen on that event? -> Callback function
let invokeMyLogger = (a, b) => {
  console.log("Log event is triggered!");
  console.log("Value of A:- ", a, " and B :-", b);
};

//1. Define an event(custom) and bind an event handler
emitter.on("newtonevent", invokeMyLogger); 

//3. Trigger the event!
emitter.emit('newtonevent', 10, 20);
emitter.emit('newtonevent', 'Argument-A', 'Argument-B');