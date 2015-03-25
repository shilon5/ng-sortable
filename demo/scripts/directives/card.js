/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */

'use strict';

angular.module('demoApp').directive('card', [ '$log', function ($log) {

    return {
        scope: {
            card: '=',
            onRemove: '&'
        },
        restrict: 'A',
        templateUrl: 'views/partials/card.html',
        link: function (scope, element, attrs) {
            //$log.debug('card ' + JSON.stringify( scope.card ) + ' linked');
        }
    };

}]);
