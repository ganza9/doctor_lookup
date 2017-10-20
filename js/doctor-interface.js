var apiKey = require('./../.env').apiKey;

$(document).ready(fucntion(){
  $('#doctorLocator').click(function(){
    let symptom = $('#symptom').val();
    $('#symptom').val("");

    let request = new XMLHttpRequest();
    let url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + apiKey;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    getElements = function(response) {
      $('.showDoctor').text('The doctors available in Portland are ${response.main.doctor}%')
    }
  });
});
