/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */

'use strict';

angular.module('demoApp').controller('SprintController', ['$scope', 'BoardService', 'BoardDataFactory', function ($scope, BoardService, BoardDataFactory) {

    $scope.sprintBoard = BoardService.sprintBoard(BoardDataFactory.sprint);

    $scope.removeCard = function (backlog, phase, card) {
        BoardService.removeTask($scope.sprintBoard, backlog, phase, card);
    }

    $scope.addNewCard = function(backlog){
        BoardService.addNewTask($scope.sprintBoard, backlog);
    };


    $scope.sprintSortOptions = {

        //restrict move across backlogs. move only within backlog.
        accept: function (sourceItemHandleScope, destSortableScope, destItemScope) {
            return sourceItemHandleScope.itemScope.sortableScope.$parent.$parent.backlog.$$hashKey === destSortableScope.$parent.$parent.backlog.$$hashKey;
        },
        itemMoved: function (event) {
        },
        orderChanged: function (event) {
        },
        containment: '#board'
    };
}]);
