

var app = angular.module('Portfolio', [
  'ngRoute', 'ngAnimate'
]);

/*
Routes Configuration
*/

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Home
    .when("/", { templateUrl: "partials/home.html", controller: "PageCtrl" })

    // Pages
    .when("/work", { templateUrl: "partials/work.html", controller: "PageCtrl" })

    .when("/experiences", { templateUrl: "partials/experiences.html", controller: "PageCtrl" })
    
    .when("/contact", { templateUrl: "partials/contact.html", controller: "PageCtrl" })

    // else redirect home
    .otherwise("/", { templateUrl: "partials/home.html", controller: "PageCtrl" });
} ]);


app.controller('PageCtrl', function ( $scope/*, $location, $http */) {
   
    $scope.pageClass = 'page-effect';

});

app.controller("dataImagesWork", function ($scope) {
    $scope.images_work = [
          { num: 1, category: 'marketing', src: "1.jpg", description: 'Mobile Reporting. ', url_details: "details.html" },
          { num: 2, category: 'branding', src: "2.jpg", description: 'UI Requirement Report. ', url_details: "details.html" },
          { num: 3, category: 'design', src: "3.jpg", description: 'UI Design Report ', url_details: "details.html" },
          { num: 4, category: 'photo', src: "4.jpg", description: 'Assets to be used. ', url_details: "details.html" },
          { num: 5, category: 'marketing', src: "8.jpg", description: 'Mobile Reporting ', url_details: "details.html" },
          { num: 6, category: 'design', src: "6.jpg", description: 'UI Design Report. ', url_details: "details.html" }];

});


//'use strict';
app.directive('autoActive', ['$location', function ($location) {
    return {
        restrict: 'A',
        scope: false,
        link: function (scope, element) {
            function setActive() {
                var path = $location.path();
                if (path) {
                    angular.forEach(element.find('li'), function (li) {
                        var anchor = li.querySelector('a');
                        if (anchor.href.match('#' + path + '(?=\\?|$)')) {
                            angular.element(li).addClass('current');
                        } else {
                            angular.element(li).removeClass('current');
                        }
                    });
                }
            }

            setActive();

            scope.$on('$locationChangeSuccess', setActive);
        }
    }
} ]);






