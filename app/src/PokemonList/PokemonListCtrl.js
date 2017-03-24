'use strict';

pokemonApp.controller('PokemonListCtrl', function($scope, $q, PokemonsService, BerriesService) {

    // PokemonsService.getPokemons().then(function(response) {
    //     $scope.pokemons = response.data.results;
    // });
    //
    // BerriesService.getBerries().then(function(response) {
    //     $scope.berries = response.data.results;
    // });

   
/*
    PokemonsService.getPokemons().then(function(response) {
        $scope.pokemons = response.data.results;

        return BerriesService.getBerries()
    }).then(function(response) {
        $scope.berries = response.data.results;
    });
*/
    $scope.pokemonsAndBerriesLoaded = false;

    const defer = $q.all([
        PokemonsService.getPokemons().then(function(response) {
            $scope.pokemons = response.data.results;
        }, function(response) {
            console.log('err_pokem:', response);
        }),
        BerriesService.getBerries().then(function(response) {
            $scope.berries = response.data.results;
        }, function(response) {
            console.log('err_berry:', response);
        })
    ]);
    
    defer.then( (response) => {
        $scope.pokemonsAndBerriesLoaded = true;
    });

});
