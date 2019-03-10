var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "home/home.html",
    controller : "homeCtrl"
  }).when("/home", {
    templateUrl : "home/home.html",
    controller : "homeCtrl"
  })
  .when("/about", {
    templateUrl : "about/about.html",
    controller : "aboutCtrl"
  })
});
app.controller("mainCtrl", function ($scope,$location) {
  $scope.gotoabout=function(){
    $location.url('/about')
 }
})