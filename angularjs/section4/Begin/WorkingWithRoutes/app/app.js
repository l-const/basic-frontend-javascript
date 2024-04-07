(function() {
    
    var app = angular.module('customersApp', ['ngRoute']);
    

    app.config(function ($routeProvider) {
        // Routes go here
        $routeProvider
         .when('/', {
            controller: 'CustomersController',
            templateUrl: 'app/views/customers.html'
         })
         .when('/orders/:customerId', {
            controller: 'OrdersController',
            templateUrl: 'app/views/orders.html'
         })
         .otherwise({ redirectTo: '/' })

    })
}());