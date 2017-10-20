(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "1039e7f9f83c42d112f2a2852a3812a5";

},{}],2:[function(require,module,exports){
'use strict';

var apiKey = require('./../.env').apiKey;

$(document).ready(function () {
  $('#doctorLocator').click(function () {
    var symptom = $('#symptom').val();
    $('#symptom').val("");
    $.ajax({
      url: 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=[apiKey]',
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function success(response) {
        $('.showDoctor').text();
      },
      error: function error() {
        $('.showErrors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});

},{"./../.env":1}]},{},[2]);
