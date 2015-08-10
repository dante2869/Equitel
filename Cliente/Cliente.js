var http = require('http');
var options = {
	hostname: 'localhost',
	port: 3000,
	path: '/api/lectura',
	method: 'POST'
};

var now;
var Sens1;
var Sens2;
var Sens3;
var Sens4;
var Sens5;
var Sens6;
var Sens7;
var Sens8;
var Sens9;
var Sens10;
var Sens11;
var Sens12;
var Sens13;
var Sens14;
var Sens15;
var Sens16;
var Sens17;
var Sens18;
var Sens19;
var Sens20;
var Sens21;
var Sens22;
var Sens23;
var Sens24;
var Sens25;
var Sens26;
var Sens27;
var Sens28;
var Sens29;
var Sens30;
var t;
var req = null;

setInterval(function() {

	req = http.request(options, function(res) {
		console.log('STATUS: ' + res.statusCode);
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			console.log('BODY: ' + chunk);
		});
	});

	req.on('error', function(e) {
		console.log('problem with request: ' + e.message);
	});

	console.log('Envio lectura ');
	
	t = {
		time: (new Date()).toJSON(),
                sensor1: Math.floor((Math.random() * 100)),
		sensor2: Math.floor((Math.random() * 100)),
		sensor3: Math.floor((Math.random() * 100)),
		sensor4: Math.floor((Math.random() * 100)),
		sensor5: Math.floor((Math.random() * 100)),
		sensor6: Math.floor((Math.random() * 100)),
		sensor7: Math.floor((Math.random() * 100)),
		sensor8: Math.floor((Math.random() * 100)),
		sensor9: Math.floor((Math.random() * 100)),
		sensor10: Math.floor((Math.random() * 100)),
		sensor11: Math.floor((Math.random() * 100)),
		sensor12: Math.floor((Math.random() * 100)),
		sensor13: Math.floor((Math.random() * 100)),
		sensor14: Math.floor((Math.random() * 100)),
		sensor15: Math.floor((Math.random() * 100)),
		sensor16: Math.floor((Math.random() * 100)),
		sensor17: Math.floor((Math.random() * 100)),
		sensor18: Math.floor((Math.random() * 100)),
		sensor19: Math.floor((Math.random() * 100)),
		sensor20: Math.floor((Math.random() * 100)),
		sensor21: Math.floor((Math.random() * 100)),
		sensor22: Math.floor((Math.random() * 100)),
		sensor23: Math.floor((Math.random() * 100)),
		sensor24: Math.floor((Math.random() * 100)),
		sensor25: Math.floor((Math.random() * 100)),
		sensor26: Math.floor((Math.random() * 100)),
		sensor27: Math.floor((Math.random() * 100)),
		sensor28: Math.floor((Math.random() * 100)),
		sensor29: Math.floor((Math.random() * 100)),
		sensor30: Math.floor((Math.random() * 100))
	};
	req.write(JSON.stringify(t));
	req.end();

}, 1000);
