
angular
    .module('PokemonApp')
    .factory('PokemonsService', function($http, BaasService) {
    
            return {

                getPokemons: function() {
                    return $http.get('http://pokeapi.co/api/v2/pokemon/?limit=10');
                },

                getPokemon: function(pokemonId) {
                    return $http.get('http://pokeapi.co/api/v2/pokemon/' + pokemonId);
                },

                createPokemon: function(pokemonData) {
                    return BaasService.createPokemon(pokemonData);
                },

                updatePokemon: function(pokemonData) {
                    return BaasService.updatePokemon(pokemonData);
                },

                deletePokemon: function(pokemonId) {
                    return BaasService.deletePokemon(pokemonData);
                }

            }

        }

    );
