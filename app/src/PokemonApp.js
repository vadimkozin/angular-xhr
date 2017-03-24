var pokemonApp = angular.module('PokemonApp', ['ngRoute', 'btford.socket-io']);

angular
    .module('PokemonApp')

.config(['$routeProvider',
    function config($routeProvider) {

        $routeProvider.
        when('/pokemons', {
            templateUrl: 'src/PokemonList/PokemonList.html',
            controller: 'PokemonListCtrl'
        }).

        when('/pokemons/:pokemonId', {
            templateUrl: 'src/PokemonEdit/PokemonEdit.html',
            controller: 'PokemonEditCtrl'
        }).

        //when('/pokemons/:pokemonId', {
        //    templateUrl: 'src/PokemonDetail/PokemonDetail.html',
        //    controller: 'PokemonDetailCtrl'
        //}).

        when('/berry/:berryId', {
            templateUrl: 'src/BerryDetail/BerryDetail.html',
            controller: 'BerryDetailCtrl'
        }).
        when('/create', {
            templateUrl: 'src/CreatePokemon/CreatePokemon.html',
            controller: 'CreatePokemonCtrl'
        }).
        when('/realtime/:userName', {
            templateUrl: 'src/PokemonRealtime/PokemonRealtime.html',
            controller: 'PokemonRealtimeCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
])


.factory('mySocket', function(socketFactory) {
  var myIoSocket = io.connect('https://netology-socket-io.herokuapp.com/');

    mySocket = socketFactory({
      ioSocket: myIoSocket
    });

    return mySocket;
});
