var app = angular.module('StarterApp', ['ngMaterial', 'ngMessages']);

app.config(['$mdThemingProvider', function($mdThemingProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('grey');
}]);

app.controller('AppCtrl', ['$scope', '$mdDialog', function($scope, $mdDialog){

}]);

