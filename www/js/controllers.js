angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicLoading) {
  google.maps.event.addDomListener(window, 'load', function() {
      var myLatlng = new google.maps.LatLng(34.022467, -118.495874);

      var mapOptions = {
          center: myLatlng,
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map(document.getElementById("map"), mapOptions);

      // Marker - Veggie Grill ================================================================

      var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading"><b>True Food Kitchen</b></h3>'+
      '<div id="bodyContent">'+
      '<p><b>Address: </b>395 Santa Monica Pl (at 2nd St.), Santa Monica, CA 90401</p>' +
      '<p><b>Phone: </b>(310) 593-8300</p>'+
      '<p><b>Hours: </b>Mon–Fri 11:30AM – 10:00PM | Sat–Sun 10:00AM – 10:00PM</p>'+
      '<p><a href="http://www.truefoodkitchen.com"><b>Website</b></a></p>'+
      '<p><b>Menu: </b><b>Braised Artichoke</b> - Spring onion, english pea & lemon ricotta<br> <b>Spaghetti Squash Casserole</b> - Fresh mozzarella, organic tomato & zucchini<br><b>"Inside Out" Quinoa Burger</b> - Hummus, tzatziki, tomato, cucumber, red onion, avocado & feta</p>'
      '</div>'+
      '</div>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      var marker = new google.maps.Marker({
        position: {lat: 34.012854, lng: -118.49463},
        map: map,
        title: 'True Food Kitchen'
      });

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

      // Marker 1 - SuperFood Cafe =======================================================

      var contentString1 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading"><b>sweetgreen</b></h3>'+
      '<div id="bodyContent">'+
      '<p><b>Address: </b>1343 4th St, Santa Monica, CA 90401</p>' +
      '<p><b>Phone: </b>(424) 744-8321</p>'+
      '<p><b>Hours: </b>Mon–Sun 10:30AM – 10:00PM</p>'+
      '<p><a href="http://www.sweetgreen.com"><b>Website</b></a></p>'+
      '<p><b>Menu: </b><b>Umami Grain Bowl</b> (555 cal) - Organic quinoa + farro, swiss chard, pea shoots, roasted mushrooms, red onion, roasted tofu, spicy sunflower seeds, miso sesame ginger dressing<br><b>Not So Niçoise</b> (545 cal) - Organic mesclun, chopped romaine, roasted asparagus, roasted potatoes, hard boiled egg, roasted steelhead, horseradish vinaigrette<br><b>Organic Lentil Chickpea Soup</b> (160-240 cal) - This 100% organic soup is made with hearty lentils and chickpeas with diced carrots, onions and celery</p>'
      '</div>'+
      '</div>';

      var infowindow1 = new google.maps.InfoWindow({
        content: contentString1
      });

      var marker1 = new google.maps.Marker({
        position: {lat: 34.0167195, lng: -118.4956159},
        map: map,
        title: 'sweetgreen'
      });

      marker1.addListener('click', function() {
        infowindow1.open(map, marker1);
      });

      // Marker 2 - Musha Izakaya Restaurant ==============================================

      var contentString2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading"><b>Seasons 52</b></h3>'+
      '<div id="bodyContent">'+
      '<p><b>Address: </b>1501 Ocean Ave, Santa Monica, CA 90401</p>' +
      '<p><b>Phone: </b>(310) 451-1152</p>'+
      '<p><b>Hours: </b>Mon-Thu 11:00AM - 10:00PM | Fri-Sat 11:00AM - 11:00PM | Sun 10:00AM - 10:00PM</p>'+
      '<p><a href="http://m.seasons52.com/home"><b>Website</b></a></p>'+
      '<p><b>Menu: </b><b>Hummus Duo with Crisp Hawaiian Sea Salt Lavosh</b> - Minted edamame hummus, roasted red pepper hummus<br><b>Roasted Roma Tomato</b> - Fresh mozzarella cheese, parmesan, ribbons of basil<br><b>Spring Vegetarian Tasting</b> - Quinoa-citrus salad, soft taco, seasonal vegetables, cedar-roasted tofu, tropical salsa</p>'
      '</div>'+
      '</div>';

      var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
      });

      var marker2 = new google.maps.Marker({
        position: {lat: 34.0128409, lng: -118.496079},
        map: map,
        title: 'Seasons 52'
      });

      marker2.addListener('click', function() {
        infowindow2.open(map, marker1);
      });

      // Marker 3 - Seasons 52 ===============================================================

      var contentString3 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading"><b>R+D Kitchen</b></h3>'+
      '<div id="bodyContent">'+
      '<p><b>Address: </b>1323 Montana Ave (at 14th St), Santa Monica, CA 90403</p>' +
      '<p><b>Phone: </b>(310) 395-3314</p>'+
      '<p><b>Hours: </b>Mon–Wed 11:30AM – 10PM | Thu 11:30AM – 11:00PM | Fri–Sat 11AM – 11PM | Sun 11AM – 10PM</p>'+
      '<p><a href="http://rd-kitchen.com"><b>Website</b></a></p>'+
      '<p><b>Menu: </b><b>Veggie Burger</b> - Brown rice, mushrooms, almonds & melted jack<br><b>Spinach & Cheese Omelet</b> - With mixed greens, campari tomato & griddled toast — choice of baby swiss, goat, cheddar or jack cheese<br><b>Deviled Eggs</b></p>'
      '</div>'+
      '</div>';

      var infowindow3 = new google.maps.InfoWindow({
        content: contentString3
      });

      var marker3 = new google.maps.Marker({
        position: {lat: 34.0320772, lng: -118.497955},
        map: map,
        title: 'R+D Kitchen'
      });

      marker3.addListener('click', function() {
        infowindow3.open(map, marker1);
      });

      // Geolocator =============================================================

      navigator.geolocation.getCurrentPosition(function(pos) {
          map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          var myLocation = new google.maps.Marker({
              position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
              map: map,
              title: "My Location"
          });
      });

      $scope.map = map;

      // marker = new google.maps.Marker({
      //     map: map,
      //     draggable: true,
      //     animation: google.maps.Animation.DROP,
      //     position: {lat: 34.021235, lng: -118.495338}
      //   });
      //   marker.addListener('click', toggleBounce);
      // }
      //
      // function toggleBounce() {
      //   if (marker.getAnimation() !== null) {
      //     marker.setAnimation(null);
      //   } else {
      //     marker.setAnimation(google.maps.Animation.BOUNCE);
      //   }
      // }

  });
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('WelcomeCtrl', function($scope, $state, $q, UserService, $ionicLoading) {
  // This is the success callback from the login method
  var fbLoginSuccess = function(response) {
    if (!response.authResponse){
      fbLoginError("Cannot find the authResponse");
      return;
    }

    var authResponse = response.authResponse;

    getFacebookProfileInfo(authResponse)
    .then(function(profileInfo) {
      // For the purpose of this example I will store user data on local storage
      UserService.setUser({
        authResponse: authResponse,
				userID: profileInfo.id,
				name: profileInfo.name,
				email: profileInfo.email,
        picture : "http://graph.facebook.com/" + authResponse.userID + "/picture?type=large"
      });
      $ionicLoading.hide();
      $state.go('app.home');
    }, function(fail){
      // Fail get profile info
      console.log('profile info fail', fail);
    });
  };

  // This is the fail callback from the login method
  var fbLoginError = function(error){
    console.log('fbLoginError', error);
    $ionicLoading.hide();
  };

  // This method is to get the user profile info from the facebook api
  var getFacebookProfileInfo = function (authResponse) {
    var info = $q.defer();

    facebookConnectPlugin.api('/me?fields=email,name&access_token=' + authResponse.accessToken, null,
      function (response) {
				console.log(response);
        info.resolve(response);
      },
      function (response) {
				console.log(response);
        info.reject(response);
      }
    );
    return info.promise;
  };

  //This method is executed when the user press the "Login with facebook" button
  $scope.facebookSignIn = function() {
    facebookConnectPlugin.getLoginStatus(function(success){
      if(success.status === 'connected'){
        // The user is logged in and has authenticated your app, and response.authResponse supplies
        // the user's ID, a valid access token, a signed request, and the time the access token
        // and signed request each expire
        console.log('getLoginStatus', success.status);

    		// Check if we have our user saved
    		var user = UserService.getUser('facebook');

    		if(!user.userID){
					getFacebookProfileInfo(success.authResponse)
					.then(function(profileInfo) {
						// For the purpose of this example I will store user data on local storage
						UserService.setUser({
							authResponse: success.authResponse,
							userID: profileInfo.id,
							name: profileInfo.name,
							email: profileInfo.email,
							picture : "http://graph.facebook.com/" + success.authResponse.userID + "/picture?type=large"
						});

						$state.go('app.home');
					}, function(fail){
						// Fail get profile info
						console.log('profile info fail', fail);
					});
				}else{
					$state.go('app.home');
				}
      } else {
        // If (success.status === 'not_authorized') the user is logged in to Facebook,
				// but has not authenticated your app
        // Else the person is not logged into Facebook,
				// so we're not sure if they are logged into this app or not.

				console.log('getLoginStatus', success.status);

				$ionicLoading.show({
          template: 'Logging in...'
        });

				// Ask the permissions you need. You can learn more about
				// FB permissions here: https://developers.facebook.com/docs/facebook-login/permissions/v2.4
        facebookConnectPlugin.login(['email', 'public_profile'], fbLoginSuccess, fbLoginError);
      }
    });
  };
});

// .controller('PopupCtrl',function($scope, $ionicPopup) {
//   $scope.showPopup = function() {
//   $scope.data = {};
//
//   // A confirm dialog
//   $scope.showConfirm = function() {
//     var confirmPopup = $ionicPopup.confirm({
//       title: 'Consume Ice Cream',
//       template: 'Are you sure you want to eat this ice cream?'
//     });
//
//     confirmPopup.then(function(res) {
//       if(res) {
//         console.log('You are sure');
//       } else {
//         console.log('You are not sure');
//       }
//     });
//   };
// });

// controller applied to user creation page
// .controller('userCreateController', function($location, User, Auth) {
//
// 	var vm = this;
//
// 	// variable to hide/show elements of the view
// 	// differentiates between create or edit pages
// 	vm.type = 'create';
//
// 	// function to create a user
// 	vm.saveUser = function() {
// 		vm.processing = true;
// 		vm.message = '';
//
// 		// use the create function in the userService
// 		User.create(vm.userData)
// 			.success(function(data) {
// 				vm.processing = false;
// 				vm.message = data.message;
// 				Auth.login(vm.userData.username, vm.userData.password)
// 					.success(function(data) {
// 						vm.processing = false;
// 						vm.userData = {};
// 						// if a user successfully logs in, redirect to users page
// 						if (data.success)
// 							$location.path('/main');
// 						else
// 							vm.error = data.message;
//
// 					});
// 			});
//
// 			// $location.path('/main');
//
// 	};
//
// })
