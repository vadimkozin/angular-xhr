'use strict';

pokemonApp.controller('PokemonEditCtrl', function($scope, $routeParams, PokemonsService) {

    $scope.pokemonLoaded = false;

    PokemonsService.getPokemon($routeParams['pokemonId']).then(function(response) {
        $scope.pokemon = response.data;
        $scope.pokemonLoaded = true;
  
    }, function(response) { 
        console.log ('err_getPokemon:', response);
    });

    $scope.savePokemon = function(myPokemon) {

        $scope.savedSuccess = false;
        $scope.savedError = false;

        PokemonsService.updatePokemon(myPokemon).then(function(response) {

            // Ok
            $scope.savedPokemonId = response.data.objectId;
            $scope.savedSuccess = true;

        }, function (response) {
            // !Ok
            $scope.savedError = true;
        });

    }

});
