function objectToJSON() {
  let car = {
    name: "Maruti Suzuki",
    model: "Swift",
    year: 2018,
    variant: "VXI"
  };

  console.log("Object:- ", car);
  let jsonString = JSON.stringify(car);
  console.log("JSON String :- ", jsonString);
  console.log("Back to Object from JSON:- ", JSON.parse(jsonString));

}
objectToJSON();