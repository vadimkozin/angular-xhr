angular
    .module('PokemonApp')
    .factory('BerriesService', function($http) {

            return {

                getBerries: function() {
                    return $http.get('http://pokeapi.co/api/v2/berry/?limit=5');
                },
                getBerry: function(berryId) {
                    return $http.get('http://pokeapi.co/api/v2/berry/' + berryId);
                },
                deleteBerry: function(berryId) {
                    return $http({
                        method: 'DELETE',
                        url: 'https://api.backendless.com/v1/data/berry/' + berryId,
                        headers: {
                            "application-id": "4B730C92-F81E-236B-FFF0-6651FE882800",
                            "secret-key": "CB6DE86C-6069-86C4-FF1C-9049D5AC9400"

                        }
                    });
                }
            }

        }

    );
