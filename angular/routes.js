angular.module("route",["ngRoute"])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');//to get / inhome page
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html', //the first page showing all match details
            controller: 'homeController'       
        }) 

 }])       