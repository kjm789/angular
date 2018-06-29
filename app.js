(function () {
	'use strict';

	angular.module('lCheckerApp', [])

	.controller('lCheckerController', lCheckerController);

	lCheckerController.$injector = ['$scope'];
	function lCheckerController($scope) {
		$scope.input = "";
		$scope.message = "";
		$scope.color = "#ccc";

		$scope.displayOutput = function () {
			$scope.message = determineMessage($scope.input.split(',').map(item => item.trim()).filter(input => input.trim().length > 0), $scope);
		}

		$scope.clearInput = function () {
			$scope.message = "";
			$scope.input = "";
			$scope.color = "#ccc";
		}
	}

	function determineMessage(stringArr, $scope) {
		if(stringArr.length <= 0 ) {
			$scope.color = "#f00";
			return "Please Enter valid Data!";
		}
		else {
			$scope.color = "#008000";
			return stringArr.length > 3 ? "Too Much!" : "Enjoy";
		}
	}
})();