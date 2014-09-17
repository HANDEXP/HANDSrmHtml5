/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var appmodule = angular.module('appmodule', []);

appmodule.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/orderquey',{
        controller: 'orderqueryController',
        templateUrl : 'view/orderquery.html' 
        
    }).when('/reportset',{
        templateUrl : 'view/reportset.html'
    }).otherwise({
        controller: 'orderqueryController',
        redirectTo : '/orderquey'
    }).when('/orderlist',{
        templateUrl : 'view/listView.html'
    }).when('/pie',{
//        controller: 'pieController',
        templateUrl : 'view/pie.html'
    });

}]);

appmodule.controller('orderqueryController',function($scope){
    document.querySelector('.icon-srm02').addEventListener('touchend',function(e){
        window.location.href = "./view/supplierList.html"
    },false);
    document.querySelector('.icon-srm06').addEventListener('touchend',function(e){
        window.location.href = "./view/itemStock.html"
    },false);
});

appmodule.controller('TextController',function($scope){

//   var foot_bar = document.getElementById('foot_bar');
//    foot_bar.style.display ="none";
});

appmodule.controller('pieController',function($scope){

            document.getElementById("bottom_bar").style.display ="none";
            
		var pieData = [ 
				{
					value: 30,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "排名:1 总额:¥1.5亿 占比"
				},
				{
					value: 50,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Green"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Yellow"
				},
				{
					value: 40,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Grey"
				},
				{
					value: 120,
					color: "#4D5360",
					highlight: "#616774",
					label: "Dark Grey"
				}

			];

			             document.getElementById("qwe").addEventListener('touchend', function() {
                window.location.href = "#";
                document.getElementById("bottom_bar").style.display ="block";
            });
                        
				var ctx = document.getElementById("chart-area").getContext("2d");
                  
				window.myPie = new Chart(ctx).Pie(pieData);



});