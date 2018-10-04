let app1 = angular.module('app1', []);

app1.controller('ctrl1', function($scope) {
    $scope.first = '';
    $scope.second = '';
    $scope.third = '';
    $scope.fourth = '';
    $scope.people = [{name: 'Arthur Menezes', cpf: '97691315040', estado:'RS', cidade: 'Porto Alegre'},
                     {name: 'João Silva', cpf: '49359206024', estado:'SP', cidade: 'São Paulo'},
                     {name: 'Maria Santos', cpf: '67757390010', estado:'RJ', cidade: 'Rio de Janeiro'}];

    $scope.addPerson = function() {
      $scope.people.push({name: $scope.first, cpf: $scope.second, estado: $scope.third, cidade: $scope.fourth});
    };

});