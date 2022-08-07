function arrayIntro() {
  var arr1 = ["Siman", "Preeti", "Balaji", "Nahar", "Usha"];
  var arr2 = ["Sahil", "Pavan", "Neeraj", "Saurbh"];
  var arr3 = ["Jasmeen", "Aparana", "Sukhbir"];
  var arr4 = [1, 2, 3, 4, 5];
  var arr5 = [true, true, false, true];
  var arr6 = ["Raghav", 10, true, { x: 1, y: 12 }, undefined, null, ["a", "b"]];
  console.log(arr6);

  console.log("arr1 Elements :-", arr1);
  console.log("arr2[2]:-", arr2[3]);
  console.log("Size of arr3:-", arr3.length);
}

// arrayIntro();
function printElements(arr) {
  console.log("Length  :- ", arr.length, "-> Array :- ", arr);
}

function addRemoveElementsFromEnd() {
  var students = ["Siman", "Preeti"];
  printElements(students);
  students.push("Balaji");
  students.push("Usha");
  console.log("***************** After addition from end ***************");
  printElements(students);

  students.pop();
  students.pop();
  students.pop();

  console.log("***************** After deletion from end ***************");
  printElements(students);
}

// addRemoveElementsFromEnd();

function addRemoveElementsFromBeggining() {
  var students = ["Usha", "Sukhbir"];
  printElements(students);
  students.unshift("Saurabh");
  students.unshift("Aparna");
  console.log(
    "***************** After addition from the beginning ***************"
  );
  printElements(students);

  students.shift();
  students.shift();
  students.shift();

  console.log(
    "***************** After deletion from beginning ***************"
  );
  printElements(students);
}

// addRemoveElementsFromBeggining();

function deleteMethod() {
  var students = ["Sahil", "Pavan", "Neeraj", "Saurbh"];
  printElements(students);

  delete students[1];
  delete students[2];
  console.log("***************** After delete method ***************");
  printElements(students);
}
// deleteMethod();

function arr_join() {
  var students = ["Sahil", "Pavan", "Neeraj", "Saurabh"];
  console.log("students.join('<->') :- ", students.join(" <-> "));
}
// arr_join();

function mergeTwoArrays() {
  var arr2 = ["Sahil", "Pavan", "Neeraj", "Saurbh"];
  var arr3 = ["Jasmeen", "Aparana", "Sukhbir"];
  var arr4 = [1, 2, 3, 4, 5];
  //   var clubbedArray = arr2.concat(arr3).concat(arr4);
  //   var clubbedArray = arr2 +  arr3 + arr4; //Will convert it to a string with comma seperated
  var clubbedArray = arr2.concat(arr3, arr4);
  console.log("arr2 :- ", arr2);
  console.log("arr3 :- ", arr3);
  console.log("arr2.concat(arr3) :- ", clubbedArray);
}
// mergeTwoArrays();

function spliceMethods() {
  // Parameters
  // 1 -> from position where elements needs to be added
  // 2 -> how many elements needs to removed
  // 3 and afterwards -> (element(s) that needs to be added);

  //Case-01 : Only Removal
  var cities = ["Bangalore", "Mysore", "Chennai", "Mumbai", "Kolkota"];
  cities.splice(1, 2);
  console.log("After Removal :-", cities);

  //Case-02: only Addition
  cities = ["Bangalore", "Mysore", "Chennai", "Mumbai"];
  cities.splice(2, 0, "Lucknow", "MP");
  console.log("After addition :-", cities);

  //Case-03: Both Addition and Removal
  cities = ["Bangalore", "Mysore", "Chennai", "Mumbai", "Kolkota"];
  cities.splice(1, 3, "Kerala", "Gujurat");
  console.log("After Both Addition and Removal :-", cities);
}
// spliceMethods();

function sliceMethod() {
  var cities = ["Bangalore", "Mysore", "Chennai", "Mumbai"];
  console.log("cities.slice(0, 3) :-", cities.slice(0, 3));
  console.log("cities.slice(0, -1) :-", cities.slice(0, -1)); //0, 3
  console.log("cities.slice(-1, -2) :-", cities.slice(-3, -1)); //1, 3
}

// sliceMethod();

//If beginIndex or endIndex is negative then it is treated as
// beginIndex = str.length + beginIndex
// endIndex   = str.length + endIndex

// 4 + (-2) = 2
// 4 + (-1) = 3
// 4 + (-3) = 1

function forOfLoop() {
  var cities = ["Bangalore", "Mysore", "Chennai", "Mumbai"];
  for (var i = 0; i < cities.length; i++) {
    console.log("Each element - for loop :- ", cities[i]);
  }

  console.log("********************* for of loop *********************")
  for (var eachElement of cities) {
    console.log("Each element - for of loop :- ", eachElement);
  }
}
forOfLoop();
