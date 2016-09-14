/**
 * http://usejsdoc.org/
 */

var DataController = function($scope, $http, $routeParams, $log) {
	var onUserComplete = function(response) {
		$log.info('Inside User Complete');
		var hospList = response.data;
		$scope.hospitals = hospList.records;
		$log.info($scope.hospitals);
	};

    var onError = function(reason) {
		$log.info('Inside error');
        $scope.error = "Could not fetch the user";
      };

      $log.info('Inside NG JS');
      
      var urlLink = "https://data.gov.in/api/datastore/resource.json?resource_id=0578a6c3-056e-4182-af7a-4307f1e0c2a7&api-key=7aade43ec93735760ff937993a33c69a"; 
      $http({
			  method : "GET",
			  url : urlLink,
			  datatype: 'jsonp'
			}).then(onUserComplete, onError);

	
};