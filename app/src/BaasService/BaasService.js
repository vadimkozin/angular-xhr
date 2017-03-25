angular
    .module('PokemonApp')
    .run(function($http) {
        const param = {
            "application-id": "49FFA7FB-3DAE-0943-FF79-68E3AA886F00",
            "secret-key": "BAF58198-6B37-F61D-FFA2-D1D654719400"
        };
        $http.defaults.headers.post = param;
        $http.defaults.headers.put = param; 
        $http.defaults.headers.delete = param;
    })
    .factory('BaasService', function($http) {
            const url = 'https://api.backendless.com/v1/data/pokemon';
    
            return {

                createPokemon: function(pokemonData) {
                    return $http.post(url, pokemonData);
                },

                updatePokemon: function(pokemonData) {
                    return $http.put(url + '/' + pokemonData.id, pokemonData);
                },

                deletePokemon: function(pokemonId) {
                    return $http.delete(url + '/' + pokemonId);            
                }

            }

        }

    );
