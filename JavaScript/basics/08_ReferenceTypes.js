var cities = ["Bangalore", "Chennai", "Mumbai", "Kolkatta", "Delhi"];
var citiesCopy = cities;
console.log("Cities :- ", cities);
console.log("citiesCopy :- ", citiesCopy);

// cities = ["Bangalore", "Chennai", "Mumbai"];  //changes the reference of cities

cities.pop();
cities.pop();

console.log("-----------------------------------------------------");
console.log("Cities :- ", cities);
console.log("citiesCopy :- ", citiesCopy);

console.log("typeof(cities) :- ", typeof cities);

var resCities = cities + citiesCopy;
console.log("cities + citiesCopy ", resCities);

var person = {
  firstName: "Adam",
  lastName: "Gilchrist",
  email: "adam@gmail.com",
  phone: 12345,
  getFullName: function () {
    console.log("Full name is ", this.firstName + " " + this.lastName);
  },
};

var personCopy = person;
console.log("Person is : ", person);
console.log("personCopy is : ", personCopy);

personCopy["address"] = "Bangalore";
console.log("-------------------------------------------");
console.log("Person is : ", person);
console.log("personCopy is : ", personCopy);
