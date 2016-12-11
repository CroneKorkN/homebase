// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
// require turbolinks
// require d3
//= require c3
//= require_tree .

// http://jsfiddle.net/54v7r0ab/7/

$(function(){
  var date = new Date ("2013-01-01");
  var dates = ['x'];
  var values = ['data1'];
  i=500;
  while (i>0) {
    i--;

    dates.push(date.setDate(date.getDate() + Math.random()));
    values.push(200 + (Math.random() * 300));
  }
  var chart = c3.generate({
      bindto: '#graph',
      data: {
        type: 'area-step',
          x: 'x',
          columns: [
              dates,
              values
          ]
      },
      axis: {
          x: {
              type: 'timeseries',
              tick: {
                  format: '%m/%d',
              }
          },
      }

  });

  setInterval(function () {
      chart.flow({
          columns: [
              ['x', new Date (date)],
              ['data1', 200 + (Math.random() * 300)],
          ],
          duration: 100,
      });
      date.setDate(date.getDate() + Math.random());
  }, 2000);
});
