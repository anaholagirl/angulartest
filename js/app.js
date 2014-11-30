(function () {
  var app = angular.module("store", []);
  app.controller("StoreController", function() {
    this.products = gems;
  });

  var gems = [
  {
    name: "Chrysalite",
    price: 15.95,
    description: "Unique colored crystal",
    images: [
      {
        full: 'images/crystal.jpg'
      }
      ],
    canPurchase: true,
    soldOut: false,
  },
  {
    name: "Quartz",
    price: 15.95,
    description: "Opaque colored crystal",
    images: [
      {
        full: 'images/quartz.jpg'
      }
      ],
    canPurchase: true,
    soldOut: false,
  }
  ];
})();
