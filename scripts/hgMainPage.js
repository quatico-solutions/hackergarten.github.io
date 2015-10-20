'use strict';

angular.module('hackergartenPage', ['ngDialog']);

angular.module('hackergartenPage')
	.directive('randomHeaderImage', function () {
      return function (scope, element, attrs) {        
        var image = "pictures/header." + Math.floor((Math.random()*4)+1) + ".png"

        element.css({
            'background': 'url("' + image + '") center center no-repeat'
        });
      };
    });
