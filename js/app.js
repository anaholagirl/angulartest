(function () {
  var app = angular.module("store", []);
  app.controller("StoreController", function() {
    this.product = gem;
  });

  var gem = {
    name: "Chrysalite",
    price: 15.95,
    description: "This is the description",
    canPurchase: false
  }
})();
