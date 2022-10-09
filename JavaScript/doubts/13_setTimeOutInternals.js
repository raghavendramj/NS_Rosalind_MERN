function listener() {
  console.log("Print from settime out`");
}

setTimeout(listener, 300); // TimerAPI -> Message Queue

// Message Queue -> setTimeout:listener

function foo() {
  for (var i = 0; i < 10000; i++) {
    console.log(i);
  }
}
// Call Stack -> foo

foo();

// Call Stack
// -> foo -> Goes Out
// -> Comes In -> setTimeout:listener

// Call Stack -> setTimeout:listener
