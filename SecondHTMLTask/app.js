'use strict';

// Define the `phonecatApp` module
var twitterApp = angular.module('twitterApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
twitterApp.controller('suggestionsController', function suggestions($scope, suggestionsService) {
    $scope.suggestionUsers = []

    $scope.getUsers = suggestionsService.getUsers;

    suggestionsService.getUsers().then(function (response) {
        $scope.suggestionUsers = response.data.slice(0, 3);
        console.dir(response.data)
    })
})

twitterApp.factory('suggestionsService', function suggestions($http) {
    function getUsers() {
        var randomOffset = Math.floor(Math.random() * 500);
        return $http.get('https://api.github.com/users?since=' + randomOffset);
    }

    return {getUsers: getUsers};
})