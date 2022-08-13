function Product(price, brand, name, quantity) {
  this.price = price;
  this.brand = brand;
  this.name = name;
  this.quantity = quantity;

  //Private Variable
  var availableStocks = 10;

  //Private function
  var getInfo = function () {
    var finalPrice = price * quantity;
    var text = `${name} of brand ${brand} having quantity ${quantity} is worth ${finalPrice}`;
    console.log(text);
  };

  this.info = function () {
    getInfo();
    console.log(
      "Available stocks is :- ",
      Math.abs(this.quantity - availableStocks)
    );
  };
}

var mobile = new Product(12_000, "Samsung", "M13", 3);
mobile.info();
