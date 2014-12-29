(function(ng){
        'use strict';
        var app = angular.module('ngJaxBind', []);

        app.directive("mathjaxBind", function() {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$attrs",
                    function($scope, $element, $attrs) {
                        $scope.$watch($attrs.mathjaxBind, function(texExpression) {
                            $element.html(texExpression);
                            MathJax.Hub.Queue(["Typeset", MathJax.Hub, $element[0]]);
                        });
                    }]
            };
        });
}(angular));

