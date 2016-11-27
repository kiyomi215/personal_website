"use strict";

angular.module('personalWebsite.contact', [])
  .controller('contactController', ['$scope', function($scope) {
    var email = {
      sender: 'Keeley Nakamoto',
      recipient: $scope.contact.name,
      phone: $scope.contact.number,
      email: $scope.contact.email,
      message: $scope.contact.message,
      sendCopy: true
    }
    function sendEmail() {

    }

  }]);
