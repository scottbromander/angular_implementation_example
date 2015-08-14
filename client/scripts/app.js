var app = angular.module('StarterApp', ['ngMaterial', 'ngMessages']);

app.controller('AppCtrl', ['$scope', '$mdDialog', function($scope, $mdDialog){
    var alert;
    $scope.showDialog = function($event) {
        alert = $mdDialog.alert({
            title: 'Awesome Popup',
            content: 'MODAL!!!!!',
            ok: 'Close'
        });

        $mdDialog
            .show( alert )
            .finally(function() {
                alert = undefined;
            });
    };
}]);


