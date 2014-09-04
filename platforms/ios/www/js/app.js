/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var appmodule = angular.module('appmodule', []);

appmodule.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/orderquey',{
        controller: 'TextController',
        templateUrl : 'view/orderquery.html' 
        
    }).when('/reportset',{
        templateUrl : 'view/reportset.html'
    }).otherwise({
        redirectTo : '/orderquey'
    });

}]);

appmodule.controller('TextController',function($scope){

//   var foot_bar = document.getElementById('foot_bar');
//    foot_bar.style.display ="none";
});