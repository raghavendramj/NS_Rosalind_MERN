var carObject = {
    name: "Fiat",
    model: "Punto",
    weight: "1200kg",
    color: "white",
    start: function () {
        console.log("Car started!");
    },
    stop: function () {
        console.log("Car stopped!");
    },
    drive: function () {
        console.log("Now the car is been driven :- ", this);
    },
};

function objectExample() {
    console.log("carObject :- ", carObject);
    console.log("carObject.name :- ", carObject.name);
    console.log("carObject['model'] :- ", carObject["model"]);
    carObject.drive();
}

// objectExample();

function forInLoop() {
    for (var eachProperty in carObject) {
        console.log(
            "For in :- Key is ",
            eachProperty,
            " value :- ",
            carObject[eachProperty]
        );
    }
}
// forInLoop();

function question() {
    var music = {
        rock: "guitar",
        classical: "violin",
    };
    var classical = "rock";
    console.log("music.classical :- ", music.classical);
    console.log("music[classical] :- ", music[classical]);
}

question();