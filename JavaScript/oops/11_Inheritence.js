function protoBasics() {
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  Person.prototype.getFullName = function () {
    //Instance of the object -> as this....
    return this.firstName + " " + this.lastName;
  };

  var raghav = new Person("Raghav", "M J");
  console.log("Fullname is :- ", raghav.getFullName());

  // -> {} => Person.call({});
  // -> {firstName: 'raghav'}
  // -> {firstName: 'raghav', lastName: 'MJ'}
  console.log("Fullname is :- ", Person.prototype.getFullName.call(raghav));
}


function inheritance(){
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
      }
    
      Person.prototype.getFullName = function () {
        //Instance of the object -> as this....
        return this.firstName + " " + this.lastName;
      };

      function Student(firstName, lastName, schoolName, grade){
        
      }
}