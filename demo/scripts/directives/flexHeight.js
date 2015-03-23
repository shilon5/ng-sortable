/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */

'use strict';

angular.module('demoApp').directive('flexHeight', ['$window', '$timeout', '$log', function ($window, $timeout, $log) {

    function getOffsetTop( el ){
        var ot = 0;

        while ( !!el ){
            ot += el.offsetTop;
            el = el.offsetParent;
        }

        return ot;
    }

    return {
        scope: false,
        restrict: 'A',
        link: {
            post: function (scope, element) {
                scope.$watch(function(){
                    return getOffsetTop(element[0]);
                }, function(newVal, oldVal){

                    var top = newVal,
                        h = $window.innerHeight - top;

                    //$log.debug($window.innerHeight + ' - ' + top, h);

                    element.css('max-height', h + 'px');
                })

            }
        }
    };

}]);
