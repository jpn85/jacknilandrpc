'use strict';


angular.module('rockPaperScissorsApp')
    .controller('MainCtrl', ['$scope', function ($scope) {



        $scope.choice1 = undefined;
        $scope.choice2 = undefined;

        $scope.lastChoice1 = undefined;
        $scope.lastChoice2 = undefined;


        $scope.result = undefined;


        $scope.pvc = 0;
        $scope.cvc = 1;

        $scope.rock = 0;
        $scope.paper = 1;
        $scope.scissors = 2;

        $scope.setChoice1 = function (res) {
            $scope.choice1 = res;

        };

        $scope.setChoice2 = function () {

            $scope.choice2 = Math.floor((Math.random() * 2) + 0);


        };

        $scope.setRandomMatch = function () {
            var x = Math.floor((Math.random() * 2) + 0);
            if (x >= 1) {
                $scope.showPVC = true;
                $scope.showOptions = true;
            } else if (x <= 0) {
                $scope.computerMatch();
                $scope.showOptions = true;

            }
        };

        $scope.computerMatch = function () {

            $scope.setChoice2();
            $scope.showOptions = true;

            var y = $scope.choice2.valueOf();
            $scope.choice1 = y;
            $scope.choice2 = undefined;
            $scope.setChoice2();
            $scope.showOptions = true;
            $scope.showResults = true;
            $scope.match();

        };

        $scope.match = function () {
            var a = $scope.choice1.valueOf();
            var b = $scope.choice2.valueOf();

            var r = (3 + a - b) % 3;

            if (r === 1) {
                $scope.result = "Player one wins!";
            } else if (r === 2) {
                $scope.result = "Player two wins!";
            } else if (r === 0) {
                $scope.result = "It's a draw!";
            } else {
                $scope.result = "error";
            }

            $scope.setLastChoices();
        };

        $scope.setLastChoices = function () {
            $scope.setLastChoice1();
            $scope.setLastChoice2();

        };




        $scope.setLastChoice1 = function () {
            var a = $scope.choice1.valueOf();

            if (a === 0) {
                $scope.lastChoice1 = 'rock';
            } else if (a === 1) {
                $scope.lastChoice1 = 'paper';
            } else {
                $scope.lastChoice1 = 'scissors';
            }
        };
        $scope.setLastChoice2 = function () {
            var b = $scope.choice2.valueOf();

            if (b === 0) {
                $scope.lastChoice2 = 'rock';
            } else if (b === 1) {
                $scope.lastChoice2 = 'paper';
            } else {
                $scope.lastChoice2 = 'scissors';
            }
        };

        $scope.reset = function () {


            location.reload();


        };
        $scope.resetResult = function () {
            $scope.result = undefined;
        };

            }]);
