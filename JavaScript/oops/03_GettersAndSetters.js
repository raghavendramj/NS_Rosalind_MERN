function Product(price, brand, name, quantity) {
  this.price = price;
  this.brand = brand;
  this.name = name;
  this.quantity = quantity;

  //Private Variable
  var availableStocks = { x: 10, y: 20 };

  //availableStocks -> mapping -> stockAvl(oustide world!) -> get and set =>
  //We are defining mapping property(stockAvl) so that outside can access this availableStocks.
  Object.defineProperty(this, "stockAvl", {
    get: function () {
      console.log(
        "Object.defineProperty -> availableStocks :- ",
        availableStocks
      );
      return availableStocks;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid stock information");
      }
      availableStocks = value;
    },
  });
}

var watch = new Product(12_000, "Titan", "Automatic", 3);
watch.stockAvl; //Getter invocation
watch.stockAvl = { x: 40, y: 50 }; //Setter invocation
watch.stockAvl; //Getter invocation
