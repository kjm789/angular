(function () {
	'use strict';

	angular.module('lCheckerApp', [])

	.controller('lCheckerController', lCheckerController);

	lCheckerController.$injector = ['$scope'];
	function lCheckerController($scope) {
		$scope.input = "";
		$scope.message = "";

		$scope.displayOutput = function () {
			$scope.message = determineMessage($scope.input.split(',').map(item => item.trim()).filter(input => input.trim().length > 0), $scope);
		}
	}

	function determineMessage(stringArr, $scope) {
		if(stringArr.length < 0 ) {
			$scope.color = "red";
			return "Please Enter valid Data!";
		}
		else {
			$scope.color = "green";
			return stringArr.length > 3 ? "Too Much!" : "Enjoy";
		}
	}
})();