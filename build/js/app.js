(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "1039e7f9f83c42d112f2a2852a3812a5";

},{}],2:[function(require,module,exports){
'use strict';

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var apiKey = require('./../.env').apiKey;

$(document).ready(function () {
  $('#doctorLocator').click(function (event) {
    event.preventDefault();
    var symptom = $('#symptom').val();
    $('#symptom').val("");

    var promise = new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      var url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + apiKey;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function (response) {
      var body = JSON.parse(response);
      var doctors = [];
      body.data.forEach(function (doctor) {
        doctors.push(doctor.profile.first_name + " " + doctor.profile.last_name + " " + doctor.profile.title);
      });
      $('#showDoctor').text('The doctors available in your area are:');
      doctor.forEach(function (name) {
        $('#doctorList').append('<li>' + doctors + '</li>');
      });
    }, function (error) {
      $('#showErrors').text('There was an error processing your request:'(_templateObject, error.message));
    });
  });
});

},{"./../.env":1}]},{},[2]);
