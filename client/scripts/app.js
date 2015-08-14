var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdDialog', function($scope, $mdDialog){
    var alert;
    $scope.showDialog = function($event) {
        alert = $mdDialog.alert({
            title: 'Attention',
            content: 'This is an example of how easy dialogs can be!',
            ok: 'Close'
        });

        $mdDialog
            .show( alert )
            .finally(function() {
                alert = undefined;
            });
    };

    $scope.showAnotherDialog = function($event){
        alert = $mdDialog.alert({
            title: 'AnotherAttention',
            content: 'Here is another example!',
            ok: 'Close'
        });

        $mdDialog
            .show(alert)
            .finally(function(){
                alert = undefined;
            });
    };
}]);