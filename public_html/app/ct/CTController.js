
(function() {

  'use strict';

  angular.module('graham.ct')
    .controller('CTController', CT);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function CT($scope, $location, $window){
      
      
      /*******************************************************************************
      *  Global Variables
      ********************************************************************************/
      $scope.portfolio = false;
      $scope.contact = false;
      $scope.about = false;
      $scope.case = true;
      
    
      ga('set', 'page', '/ct.html');
      ga('send', 'pageview');
    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {

    });
      
};




}());


    