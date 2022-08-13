function indexOfAndLastIndexOf() {
  var str = "Hi there, How are you?";

  //Returns the position of the first occurrence of a substring.
  var currentIndex = str.indexOf("are");
  console.log("Current Index :- ", currentIndex);

  var second =
    "bangalore is a beautiful city, and bangalore is IT hub of Karnataka";
  console.log("bangalore's indexOf :- ", second.indexOf("bangalore"));
  console.log("bangalore's lastIndexOf :- ", second.lastIndexOf("bangalore"));

  var third =
    "i am raghavendra, and i am from bangalore and my first name is raghav ";
  console.log("i's indexOf :- ", third.indexOf("i"));
  console.log("i's lastIndexOf :- ", third.lastIndexOf("i"));
}

// indexOfAndLastIndexOf();

function searchMethod() {
  var str = "My favorite SpOrT is soccer, but the sport i like is cricket!";
  var idx = str.search("sport");
  console.log("Index 1:- ", idx);

  var regEx = /sport/g;
  //i flag means, ignore case sensitivity. (Case-Insesitive), g-> global
  console.log("Index 2:- ", str.search(regEx));
}

// searchMethod();

function substringMethod() {
  var str = "my favorite country is India";
  //first param -> start-index, second -> end-index(exclusive)
  console.log("str.substring(3, 11) :- ", str.substring(3, 10));

  //first param -> start index, second -> length
  console.log("str.substr(3, 11) :- ", str.substr(3, 11));
}

// substringMethod();

function replaceMethods() {
  var str = "Apples are round, and apples are juicy.";
  var result = str.replace(/apples/gi, "oranges");
  // i -> case insensitive, g-> global
  console.log("result:- ", result);
}

// replaceMethods();

function sliceMethods() {
  var str = "my favorite country is India";
  console.log("str.slice(12, 19) :- ", str.slice(12, 19));
}

// sliceMethods();
