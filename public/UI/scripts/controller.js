/**
 * Created with JetBrains WebStorm.
 * User: naitik
 * Date: 20/1/16
 * Time: 12:35 PM
 * To change this template use File | Settings | File Templates.
 */
     myApp.controller('controller',['$scope','$http',

         function mainController($scope,$http){
            $scope.details = {};

             $scope.saveData = function(){
                 $http({url : '/submit',method: "GET",params : $scope.details}).success(function(data){

                 })
                 $scope.getData();
             }

             $scope.getData = function(){
                 $http({url:'/getdata',method: "GET"}).success(function(data){
                     console.log(data);
                     $scope.datalist = data.result;
                 })
             }
             $scope.getData();

             $scope.delete = function(data){
                 $http({url : '/delete',method: "GET",params : data}).success(function(data){

                 })
                 $scope.getData();
             }
         }

     ]);