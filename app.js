var mainModule = angular.module("TempConverter", []);

mainModule.controller('ConverterController', function ($scope) {
    //MainModule.controller('TempConverter');
    
    var tc = this;
    
    tc.celsius = 0;
    tc.Fahrenheit = 0;
    
    tc.FtoC = function FtoC() {
        tc.celsius = (tc.fahrenheit - 32) / 1.8;
    }
    
    tc.CtoF = function CtoF() {
        tc.fahrenheit = tc.celsius * 1.8 + 32; 
    }
    
    //$scope.$watch('tc.Ftemperature', FtoC);
    //$scope.$watch('tc.tempValue', update);
    
});