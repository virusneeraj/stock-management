/**
 * Created by Java-Developer on 11-Oct-16.
 */
(function () {

    angular
    .module('myApp', [])
    .controller('myCtrl', function($scope) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
    });

})();