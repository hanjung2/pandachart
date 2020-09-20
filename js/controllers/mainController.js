app.controller('mainController', ['$scope', function($scope){
    $scope.list = ["Clean my room", "Go do grocery", "Study for coding interviews"];
    $scope.addItem = function() {
        $scope.list.push($scope.addToDo);
    }
}])