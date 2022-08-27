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
