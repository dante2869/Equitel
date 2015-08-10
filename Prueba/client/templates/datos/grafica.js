var limiteData = 120;
var chartData = [];
var chart = null;
var dataSeries;
var labelSerie1 = "Sensor1";
var labelSerie2 = "Sensor2";
var labelSerie3 = "Sensor3";
var labelSerie4 = "Sensor4";

function ConfigurarGrafica(){
	chart = AmCharts.makeChart("chartdiv", {
      "type": "serial",
      "theme": "none",
      "pathToImages": "http://www.amcharts.com/lib/3/images/",
      "legend": {
        "useGraphSettings": true
      },
      "dataProvider": chartData,
      "valueAxes": [{
        "id":"v1",
        "axisColor": "#FF6600",
        "axisThickness": 2,
        "gridAlpha": 0,
        "axisAlpha": 1,
        "position": "left",
        "maximum": 100,
        "minimum": 32,
        "title": labelSerie1
      }, {
        "id":"v2",
        "axisColor": "#FCD202",
        "axisThickness": 2,
        "gridAlpha": 0,
        "axisAlpha": 1,
        "position": "left",
        "maximum": 100,
        "minimum": 0,
        "title": labelSerie2,
        "offset": 50
      }, {
        "id":"v3",
        "axisColor": "#ff66CD",
        "axisThickness": 2,
        "gridAlpha": 0,
        "axisAlpha": 1,
        "position": "right",
        "maximum": 100,
        "minimum": 0,
        "title": labelSerie3
	
      }, {
        "id":"v4",
        "axisColor": "#ff0000",
        "axisThickness": 2,
        "gridAlpha": 0,
        "axisAlpha": 1,
        "position": "right",
        "maximum": 100,
        "minimum": 0,
        "title": labelSerie4,
	"offset": 50
      }],

      "graphs": [{
        "valueAxis": "v1",
        "lineColor": "#FF6600",
        "bullet": "round",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": labelSerie1,
        "valueField": "lectura1"
      }, {
        "valueAxis": "v2",
        "lineColor": "#FCD202",
        "bullet": "square",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": labelSerie2,
        "valueField": "lectura2",
        "fillAlphas": 0
      }, {
        "valueAxis": "v3",
        "lineColor": "#FCD202",
        "bullet": "square",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": labelSerie3,
        "valueField": "lectura3",
        "fillAlphas": 0
      }, {
        "valueAxis": "v4",
        "lineColor": "#FF0000",
        "bullet": "square",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": labelSerie4,
        "valueField": "lectura4",
        "fillAlphas": 0
      }],
      "chartScrollbar": {},
      "chartCursor": {
        "cursorPosition": "mouse"
      },
      "categoryField": "date",
      "categoryAxis": {
        "parseDates": false,
        "axisColor": "#DADADA",
        "minorGridEnabled": true
      }
    });
}

Meteor.startup(function () 
   {
    ConfigurarGrafica();
    Meteor.subscribe('lectura', {}, onReady = function() 
     {
        var datoSensor = DatosLectura.find({}, {sort: {time: 1}, limit: limiteData});
        datoSensor.forEach(function(point) 
        {
          updateChartAndGauges(point);
        });
     });
  });

   updateChartAndGauges = function(point){
    chartData.push({date: moment(new Date(point.time)).format("h:mm:ss A"), lectura1: point.sensor1, lectura2: point.sensor2, 	 lectura3: point.sensor3, lectura4: point.sensor4});
    chart.validateData(); 
  };

Template.grafica.jscharts = function(){
    var d = DatosLectura.findOne({}, {sort: {time: -1}});
    if (d && chart){
      if (chartData.length > limiteData) {
        chartData.shift();
      }
      updateChartAndGauges(d);
    } 
  };

Template.listaSeries.helpers({
  datosSerie: function(){
 	return Series.find();
  }
});











  


