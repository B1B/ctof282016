var mainModule = angular.module("TempConverter", ['ngAnimate']);

mainModule.controller('ConverterController', function ($scope) {
    
    //declaring variables
    var cc = this;
    cc.tempValue = 0;
    cc.celsius = 0;
    cc.fahrenheit = 0;
    
    //converting degrees from fahrenheit to celsius
    cc.FtoC = function FtoC() {
        cc.celsius = (cc.tempValue - 32) / 1.8;
    };
    
    //converting degrees from celsius to fahrenheit
    cc.CtoF = function CtoF() {
        cc.fahrenheit = cc.tempValue * 1.8 + 32; 
    };
});

mainModule.controller('ButtonController', function ($scope) {
    
    //$scope.fahrenheit = false;
    //$scope.celsius = false;
    
    var bc = this;
                    
    bc.show_fahrenheit = false;
   bc.show_celsius = false;
        
    bc.show = function show(){
        bc.show_fahrenheit = true;
        bc.show_celsius = false;
    };
                    
    bc.hide = function hide(){
        bc.show_fahrenheit = false;
        bc.show_celsius = true;
    }; 
    
    /*bc.show = function show(){
        bc.show_celsius = true;
    };
                    
    bc.hide = function hide(){
        bc.show_celsius = false;
    };*/  
                
});