var myApp=angular.module("myApp",['route']) 

myApp.service('dataService',['$http',function($http){ 
   this.request =function() {
   	this.baseUrl='https://www.anapioficeandfire.com/api';
  return   $http({ 
    method:'GET', 
    url:this.baseUrl+'/books'
   });
   
}
}]); 

myApp.service('data1Service',['$http',function($http){ 
   this.request =function() {
   	this.baseUrl='https://www.anapioficeandfire.com/api';
  return   $http({ 
    method:'GET', 
    url:this.baseUrl+'/characters'
   });
   
}
}]); 

myApp.service('data2Service',['$http',function($http){ 
   this.request =function() {
   	this.baseUrl='https://www.anapioficeandfire.com/api';
  return   $http({ 
    method:'GET', 
    url:this.baseUrl+'/houses'
   });
   
}
}]); 



myApp.controller('homeController', ['$scope', 'dataService','data1Service','data2Service',function($scope, dataService,data1Service,data2Service) { 

     $scope.data = []; 

   dataService.request().then(function successCallback(response){ 
    
          $scope.data.push.apply($scope.data,response.data); 
            console.log('got 1st data succefully pushed ', $scope.data);
       $scope.blist=$scope.data; 
      $scope.booklength=$scope.blist.length; 

//AFTER PUSHING SECOND API CALL
    data1Service.request().then(function successCallback(response){ 
    
    $scope.data.push.apply($scope.data,response.data); 
        console.log('got 2nd data succefully pushed ', $scope.data);
      $scope.list=$scope.data; 
      $scope.charlength=$scope.list.length; 
      console.log($scope.listlength); 

//AFTER PUSHING 2nd RESPONSE 3rd API CALL
        data2Service.request().then(function successCallback(response){ 
    
    $scope.data.push.apply($scope.data,response.data); 
  
    console.log($scope.data); 
      
            }, function errorCallback(response) 
   { 
    alert('some error'); 
   } 
   ) ; 
        
            }, function errorCallback(response) 
   { 
    alert('some error'); 
   } 
   ) ; 

        
            
   }, function errorCallback(response) 
   { 
    alert('some error'); 
   } 
   ); 
    
}]);

myApp.directive("bookList",function(){
	return{
		restrict:'E',
		templateUrl:"views/book-list.html",
		replace:true,
		scope:{
           bookObject:"="
		}
	}

});


myApp.directive("charList",function(){
	return{
		restrict:'E',
		templateUrl:"views/char-list.html",
		replace:true,
		scope:{
           charObject:"="
		}
	}

});

myApp.directive("houseList",function(){
	return{
		restrict:'E',
		templateUrl:"views/house-list.html",
		replace:true,
		scope:{
           houseObject:"="
		}
	}

});
    




