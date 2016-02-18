'use strict';

angular.module('taskApp', [])
    .controller('taskController', ['$scope', function ($scope) {
        $scope.task = {
            currentTime: moment()
        };
        $scope.pomodoroValue = { 
            minutes: 25, 
            seconds: 0 
        };
        $scope.task.pomodoroValueFormatted = function () {
            let time = '';

            if ($scope.pomodoroValue.minutes <= 9) {
                time += '0';
            }
            time += $scope.pomodoroValue.minutes;
            time += ':';
            if ($scope.pomodoroValue.seconds <= 9) {
                time += '0'
            }
            time += $scope.pomodoroValue.seconds;
            return time;
        }();
    }])