/**
 * Created with JetBrains WebStorm.
 * User: naitik
 * Date: 20/1/16
 * Time: 12:36 PM
 * To change this template use File | Settings | File Templates.
 */

var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: 'UI/view/home.html',
        controller : 'controller'

    }).otherwise({
            redirectTo : '/'
        })
});

angular.element(document).ready(function(){

    this.boot = function(){
        angular.bootstrap(document,['myApp']);
    };

    this.boot();
});