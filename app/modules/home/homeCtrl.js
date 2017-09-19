(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('sample')
		.controller('HomeCtrl', Home);

	Home.$inject = ['homeService', '$state', '$rootScope', '$stateParams'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(homeService, $state, $rootScope, $stateParams) {
		/*jshint validthis: true */
		var vm = this;
		vm.user = {};
		vm.edited_user = {};
		vm.user_id = $stateParams.id;

	  vm.users = [{"firstName":"John","lastName":"Doe","age":"30","employer":"Google","joiningDate":"21-07-2017","location":"Texas","id":1},{"firstName":"Vito","lastName":"Corleone","age":"21","employer":"Tesla","joiningDate":"09-09-2007","location":"Dallas","id":2},{"firstName":"Indiana","lastName":"Jones","age":"65","employer":"Apple","joiningDate":"05-01-2008","location":"California","id":3},{"firstName":"Robin","lastName":"Hood","age":"34","employer":"Shell","joiningDate":"21-05-2009","location":"Alabama","id":4},{"firstName":"Ethan","lastName":"Hunt","age":"28","employer":"Exxon","joiningDate":"22-06-2010","location":"Missouri","id":5},{"firstName":"Forrest","lastName":"Gump","age":"49","employer":"Walmart Labs","joiningDate":"23-07-2011","location":"Utah","id":6},{"firstName":"Willy","lastName":"Wonka","age":"61","employer":"Wipro","joiningDate":"24-08-2012","location":"Florida","id":7},{"firstName":"Captain","lastName":"Quint","age":"18","employer":"CTS","joiningDate":"25-09-2013","location":"Mexico","id":8},{"firstName":"Rocky","lastName":"Balboa","age":"27","employer":"TCS","joiningDate":"26-10-2014","location":"Mumbai","id":9},{"firstName":"Tom","lastName":"Powers","age":"39","employer":"Zoho","joiningDate":"27-11-2015","location":"Bangalore","id":10},{"firstName":"Harry","lastName":"Potter","age":"40","employer":"Thoughtworks","joiningDate":"28-12-2016","location":"Delhi","id":11}]


		vm.addnewuser =  function(){
			$state.go('test');
		}

		
		vm.submit = function(){
		// vm.users.push(vm.user);
		// vm.users.splice(0,1);
		}

		vm.list = function(){
			$state.go('home');
		}

		vm.edit = function(index){
			vm.edit_user = vm.users[index];
			$state.go('edit_page');
		}

		vm.edit_going = function(index)
		{
			vm.pen={};
			vm.pen.id=11;
			debugger
			vm.edited_user={};
			vm.edited_user = vm.users[index];
		}

		vm.add_going = function(index)
		{
			vm.user_id=null;
			
		}
		
		vm.page = function(pageno)
		{
			
	  vm.users = [{"firstName":"John","lastName":"Doe","age":"30","employer":"Google","joiningDate":"21-07-2017","location":"Texas","id":1},{"firstName":"Vito","lastName":"Corleone","age":"21","employer":"Tesla","joiningDate":"09-09-2007","location":"Dallas","id":2},{"firstName":"Indiana","lastName":"Jones","age":"65","employer":"Apple","joiningDate":"05-01-2008","location":"California","id":3},{"firstName":"Robin","lastName":"Hood","age":"34","employer":"Shell","joiningDate":"21-05-2009","location":"Alabama","id":4},{"firstName":"Ethan","lastName":"Hunt","age":"28","employer":"Exxon","joiningDate":"22-06-2010","location":"Missouri","id":5},{"firstName":"Forrest","lastName":"Gump","age":"49","employer":"Walmart Labs","joiningDate":"23-07-2011","location":"Utah","id":6},{"firstName":"Willy","lastName":"Wonka","age":"61","employer":"Wipro","joiningDate":"24-08-2012","location":"Florida","id":7},{"firstName":"Captain","lastName":"Quint","age":"18","employer":"CTS","joiningDate":"25-09-2013","location":"Mexico","id":8},{"firstName":"Rocky","lastName":"Balboa","age":"27","employer":"TCS","joiningDate":"26-10-2014","location":"Mumbai","id":9},{"firstName":"Tom","lastName":"Powers","age":"39","employer":"Zoho","joiningDate":"27-11-2015","location":"Bangalore","id":10},{"firstName":"Harry","lastName":"Potter","age":"40","employer":"Thoughtworks","joiningDate":"28-12-2016","location":"Delhi","id":11}]

	  	var start = pageno;
			var end = (pageno * 5);
			start = end - 5;
			vm.users = vm.users.slice(start, end)
		}

		vm.delete_submit = function(index){
			vm.users.splice(index,1);
			vm.users = vm.users;
		}

		vm.add_user = function()
		{
			// alert(1111);
		}

		vm.edit_submit = function(edited_user){

			if( vm.users[vm.user_id] == null )	
			{
						vm.users.push(edited_user);
						vm.edited_user={};
						$state.go('home');
			}
			else
			{				
					if(edited_user.firstName != null)
					{
						vm.users[vm.user_id].firstName = edited_user.firstName;
					}

					if(edited_user.lastName != null)
					{
						vm.users[vm.user_id].lastName = edited_user.lastName;
					}

					if(edited_user.id != null)
					{
						vm.users[vm.user_id].id = edited_user.id;
					}

					if(edited_user.age != null)
					{
						vm.users[vm.user_id].age = edited_user.age;
					}

					if(edited_user.employer != null)
					{
						vm.users[vm.user_id].employer = edited_user.employer;
					}

					if(edited_user.joiningDate != null)
					{
						vm.users[vm.user_id].joiningDate = edited_user.joiningDate;
					}

					if(edited_user.location != null)
					{
						vm.users[vm.user_id].location = edited_user.location;
					}
					vm.users = vm.users;
	   			vm.user_id = null;
	   			vm.edited_user={};
					$state.go('home');
		}

		}

	}

})();
