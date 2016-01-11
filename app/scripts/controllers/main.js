'use strict';

/**
 * @ngdoc function
 * @name rockPaperScissorsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rockPaperScissorsApp
 */
angular.module('rockPaperScissorsApp')
    .controller('MainCtrl', function ($scope) {
        this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        // create a message to display in our view
        $scope.message = 'test test';

    });
