"use strict";

angular.module('personalWebsite.contact', [])
  .controller('contactController', ['$scope', '$http', function($scope, $http) {

    $scope.clearForm = function(){
      $scope.contactName = '';
      $scope.contactNumber = '';
      $scope.contactEmail = '';
      $scope.contactMessage = '';
    }

    $scope.createEmail = function(){
      var contactName = $scope.contactName;
      var contactNumber = $scope.contactNumber;
      var contactEmail = $scope.contactEmail;
      var contactMessage = $scope.contactMessage;

      var email = {
        name: contactName,
        phone: contactNumber,
        email: contactEmail,
        message: contactMessage
      //sendCopy: true
      };
      console.log('here is the email: ', email);
      $scope.sendEmail(email);
      $scope.clearForm();
    };

    $scope.sendEmail = function(email) {
      $http.post('/contact-form', email)
      .then(function(response) {
        console.log('Success! ', response.data);
      })
      .catch(function(err) {
        console.log('Error: ', err);
      })
    };






  }]);
