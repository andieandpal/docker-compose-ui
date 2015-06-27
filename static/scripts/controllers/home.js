'use strict';

/**
 * @ngdoc function
 * @name staticApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the staticApp
 */
angular.module('staticApp')
  .controller('HomeCtrl', function ($scope, $resource) {

    var Host = $resource('api/v1/host');

    Host.get(function (data) {
      alertify.success('Docker Host: ' + (data.host || 'local socket'));
      $scope.dockerHost = data.host;
    });

    $scope.select = function ($event, host) {
      if (host === undefined) {
        $event.preventDefault();
      }
      alertify.success('set Docker Host: ' + (host || 'local socket'));
      Host.save({id:host || null});
      $scope.dockerHost = host;
    };

  });
