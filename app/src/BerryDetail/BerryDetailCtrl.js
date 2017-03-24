'use strict';

pokemonApp.controller('BerryDetailCtrl', function($scope, $routeParams, BerriesService) {

    $scope.berryLoaded = false;

    BerriesService.getBerry($routeParams['berryId']).then(function(response) {
        $scope.berry = response.data;
        $scope.berryLoaded = true;
        console.log($scope.berry);
    });

    $scope.deleteBerry = function(berryId) {

        $scope.deletionError = false;
        $scope.deletionSuccess = false;

        BerriesService.deleteBerry(berryId).then(function successCallback(response) {

            // Окей!
            $scope.deletionSuccess = true;

        }, function errorCallback(response) {

            // Не окей..
            $scope.deletionError = true;
        });

    }

});