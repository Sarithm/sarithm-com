(function() {
  var app = angular.module('marvel', []);
  alert("test");

  app.directive("headerInclude", function() {
    return {
      restrict: 'E',
      templateUrl: "header.html"
    };
  });

})();