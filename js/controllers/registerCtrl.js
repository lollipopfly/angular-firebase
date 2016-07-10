app.controller('RegisterCtrl', ['$scope', function($scope) {
    $scope.submit = function() {
        console.log($scope.name);
    };
}]);