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
//= require chartist
//= require moment
//= require_tree .

// http://jsfiddle.net/54v7r0ab/7/
// https://www.taucharts.com/

$(function(){
  setInterval(function(){ console.log("test"); }, 3000);
  setInterval(init_graph(), 2000);
});

function init_graph() {
  console.log("loading graph");
  var sensor_id = $(".graph").data("sensor-id");
  var values;
  $.get("/sensors/" + sensor_id + "/measurements.json", function(response) {
    var data = {
      labels: [],
      series: [
        []
      ]
    };
    var options = {
      low: 0,
      showArea: true,
      showPoint: false,
      lineSmooth: Chartist.Interpolation.step(),

      axisX: {
        showGrid: false,
        type: Chartist.FixedScaleAxis,
        divisor: 5,
        labelInterpolationFnc: function(value) {
          console.log(value);
          return moment(value).format('HH:mm');
        }
      },

    };
    for(i = 0; i < response.length; i++) {
      data["labels"].push(response[i]["date"]);
      data["series"][0].push(response[i]["value"]);
      //console.log(data);
    }
    var graph = new Chartist.Line('.graph', data, options);
  });
}
