// my app-id & secret-key
const param = {
    "application-id": "49FFA7FB-3DAE-0943-FF79-68E3AA886F00",
    "secret-key": "BAF58198-6B37-F61D-FFA2-D1D654719400"
};

angular
    .module('PokemonApp')
    .run(function($http) {
        $http.defaults.headers.post = param;
        $http.defaults.headers.put = param; 
        $http.defaults.headers.delete = param;
    })
    .factory('BaasService', function($http) {
    
            return {

                createPokemon: function(pokemonData) {
                    return $http({
                        method: 'POST',
                        url: 'https://api.backendless.com/v1/data/pokemon',
                        data: pokemonData
                    });
                },

                updatePokemon: function(pokemonData) {
                    return $http({
                        method: 'PUT',
                        url: 'https://api.backendless.com/v1/data/pokemon/' + pokemonData.id,
                        data: pokemonData
                    });
                },

                deletePokemon: function(pokemonId) {
                    return $http({
                        method: 'DELETE',
                        url: 'https://api.backendless.com/v1/data/pokemon/' + pokemonId,
                    });
                }

            }

        }

    );
