var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#doctorLocator').click(function(event){
    event.preventDefault();
    let symptom = $('#symptom').val();
    $('#symptom').val("");

    let promise = new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=${apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      let body = JSON.parse(response);
      let doctors = [];
      body.data.forEach(function(doctor){
        doctors.push(doctor.profile.first_name + " " + doctor.profile.last_name + " " + doctor.profile.title);
      });
      $('#showDoctor').text('The doctors available in your area are:');
      doctor.forEach(function(name){
        $('#doctorList').append('<li>${name}</li>');
      });
    }, function(error){
      $('#showErrors').text('There was an error processing your request: ${error.message}');
    });
  });
});
