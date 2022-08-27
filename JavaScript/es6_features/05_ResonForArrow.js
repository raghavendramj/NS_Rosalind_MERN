function typicalScenario() {
  let person = {
    name: "Raghav",
    get: function () {
      //Here this -> current object
      console.log("GET:- Name :- ", this.name);
      let print = function () {
        console.log("print:- Name :- ", this.name);
      };
      print();
    },
  };

  person.get();
}

typicalScenario();

function withArrowFunctions() {
  let person = {
    name: "Raghav",
    get: function () {
      //Here this -> current object
      console.log("GET:- Name :- ", this.name);
      let print = () => {
        console.log("print:- Name :- ", this.name);
      };
      print();
    },
  };

  person.get();
}

withArrowFunctions();
