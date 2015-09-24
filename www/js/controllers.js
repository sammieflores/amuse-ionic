angular.module('amuse.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  // $scope.loginData = {};

  // Create the tile modal that we will use later
  $ionicModal.fromTemplateUrl('templates/tile.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the tile modal to close it
  $scope.closeTile = function() {
    $scope.modal.hide();
  };

  // Open the tile modal
  $scope.tile = function() {
    $scope.modal.show();
  };

})

.controller('TilesCtrl', function($scope) {

  var currentStart = 0

  $scope.tiles = [
    { title: 'cool' },
    { title: 'amazing' },
    { title: 'inspiring', },
    { title: 'lovely' },
    { title: 'sweet' },
    { title: 'gorgeous' },
    { title: 'unique' },
    { title: 'creative' },
    { title: 'innovative' },
    { title: 'thoughtful' },
    { title: 'neat' },
    { title: 'different' },
    { title: 'interesting' },
    { title: 'crazy' },
    { title: 'wonderful' },
    { title: 'lazy' },
    { title: 'dark' },
    { title: 'evocative' },
    { title: 'edgy' },
    { title: 'intricate' },
    { title: 'detailed' },
    { title: 'mysterious' },
    { title: 'ominous' },
    { title: 'happy' },
    { title: 'talented' },
    { title: 'fresh' }
  ],

  $scope.addTiles = function() {
    for (var i = currentStart; i < currentStart+10; i++) {
      $scope.tiles.push("Tile " + i)
    }

    currentStart += 10
  }

  $scope.addTiles()
  // SAM: important 
  $scope.$broadcast('scroll.infiniteScrollComplete')
})


.controller('TileCtrl', function($scope, $stateParams) {
});

// .controller('MainCtrl', function($scope) {
//   var currentStart = 0
//   $scope.items = []


//   $scope.addItems = function() {
//     for (var i = currentStart; i < currentStart+10; i++) {
//       $scope.items.push("Item " + i)
//     }

//     currentStart += 10
//   }

//   $scope.addItems()
// })
