'use strict';

pokemonApp.controller('PokemonDetailCtrl', function($scope, $routeParams, PokemonsService) {

    $scope.pokemonLoaded = false;

    PokemonsService.getPokemon($routeParams['pokemonId']).then(function(response) {
        $scope.pokemon = response.data;
        $scope.pokemonLoaded = true;
    }, function(response) { 
        console.log ('err_getPokemon:', response)
    });

    $scope.deletePokemon = function(pokemonId) {

        $scope.deletionError = false;
        $scope.deletionSuccess = false;

        PokemonsService.deletePokemon(pokemonId).then(function successCallback(response) {

            // Окей!
            $scope.deletionSuccess = true;

        }, function errorCallback(response) {

            // Не окей..
            $scope.deletionError = true;
        });

    }

});
