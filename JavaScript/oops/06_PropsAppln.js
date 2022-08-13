var person = {
  firstName: "John",
  lastName: "Doe",
};

Object.defineProperty(person, "fullName", {
  get: function () {
    return this.firstName + " " + this.lastName;
  },
  set: function (value) {
    var names = value.split(" ");
    if (names.length == 2) {
      this.firstName = names[0];
      this.lastName = names[1];
    } else {
      throw "Invalid name format!";
    }
  },
});

console.log(person.fullName);
person.fullName = 'Raghav MJ';
console.log(person.fullName);

var product = {};
Object.defineProperties(product, {
    name: {
        value: 'Smartphone'
    },
    price: {
        value: 799
    },
    tax: {
        value: .10
    },
    netPrice : {
        get: function(){
            return this.price * (1 + this.tax);
        }
    }
});

console.log('The net price of a ' + product.name + ' is ' + product.netPrice.toFixed(2) + ' USD');
console.log('product.name:- ', product.name);
console.log('product.price:- ', product.price);
console.log('product.tax:- ', product.tax);
console.log('product.netPrice:- ', product.netPrice);
console.log('product:- ', product);
