var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#doctorLocator').click(function(){
    let symptom = $('#symptom').val();
    $('#symptom').val("");
    $.ajax({
      url:'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=[apiKey]',
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response){
        $('.showDoctor').text()
      },
      error: function(){
        $('.showErrors').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
