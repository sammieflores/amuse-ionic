angular.module('amuse.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('TilesCtrl', function($scope) {
  $scope.tiles = [
    { title: 'cool', id: 1 },
    { title: 'amazing', id: 2 },
    { title: 'inspiring', id: 3 },
    { title: 'lovely', id: 4 },
    { title: 'sweet', id: 5 },
    { title: 'gorgeous', id: 6 },
    { title: 'unique', id: 7 },
    { title: 'creative', id: 8 },
    { title: 'innovative', id: 9 },
    { title: 'thoughtful', id: 10 },
    { title: 'neat', id: 11 },
    { title: 'different', id: 12 },
    { title: 'interesting', id: 13 },
    { title: 'crazy', id: 14 },
    { title: 'wonderful', id: 15 },
    { title: 'lazy', id: 16 },
    { title: 'dark', id: 17 },
    { title: 'evocative', id: 18 },
    { title: 'edgy', id: 19 },
    { title: 'intricate', id: 20 },
    { title: 'detailed', id: 21 },
    { title: 'mysterious', id: 22 },
    { title: 'ominous', id: 23 },
    { title: 'happy', id: 24 },
    { title: 'talented', id: 25 },
    { title: 'fresh', id: 26 },
  ];
})

.controller('TileCtrl', function($scope, $stateParams) {
});
