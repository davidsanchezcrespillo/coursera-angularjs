(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.list = "";
	$scope.message = "";
	
	$scope.CheckIfTooMuch = function() {
		var message = "";
		var splittedArray = $scope.list.split(",");
		if ($scope.list == "") {
			message = "Please enter data first";
		} else if (splittedArray.length <= 3) {
			message = "Enjoy!";
		} else {
			message = "Too much!";
		}
		
		$scope.message = message;
	};
}

})();