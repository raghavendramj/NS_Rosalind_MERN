var x = 10; 
console.log(window.x);

let y = 20; 
console.log(window.y);

function varTest() {
  var number = 10;
  console.log("1. Outside block :- ", number);
  {
    var number = 24;
    console.log("2. Inside block :- ", number);
  }
  console.log("3. Outside block :- ", number);
}

// varTest();

function letTest() {
  let number = 56;
  console.log("1. Outside block :- ", number);  
  {
    let number = 84;
    console.log("2. Inside block :- ", number);
  }
  console.log("3. Outside block :- ", number);
}

letTest();

function hositingTest(){
  console.log("1. :-", num);
  var num = 10; 
  console.log("3. :-", num);  
}
hositingTest();