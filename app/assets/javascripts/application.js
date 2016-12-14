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
//= require_tree .

// http://jsfiddle.net/54v7r0ab/7/
// https://www.taucharts.com/

$(function(){
  init_graph();
});

function init_graph() {
  var sensor_id = $(".graph").data("sensor-id");
  var values;
  $.get("/sensors/" + sensor_id + "/measurements.json", function(response) {
    var data = {
      labels: [],
      series: [
        []
      ]
    };
    for(i = 0; i < response.length; i++) {
      data["labels"].push(response[i]["date"]);
      data["series"][0].push(response[i]["value"]);
      console.log(data);
    }
    var graph = new Chartist.Line('.graph', data);
  });
}
