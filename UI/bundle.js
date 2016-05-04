(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function sumTwo(a, b) {
	return a + b;
}
function sumThree(a, b, c) {
	return a + b + c;
}

module.exports = sumTwo;
//export {sumTwo};

},{}],2:[function(require,module,exports){
'use strict';

//import {sumTwo} from 'addition';
var sumTwo = require('./addition');
console.log("1+3", sumTwo(1, 3));
var x = 5;
console.log(x);

var button = document.createElement('button');
var btnText = document.createTextNode("click me!");
var header = document.createTextNode("BABEL(ES6) -> BROWSERIFY(REQUIRE) ");
var div = document.getElementById('div1');

button.appendChild(btnText);

document.body.appendChild(header);
document.body.appendChild(button);

var exchanges = [{
	name: "NYSE",
	stocks: [{ symbol: "GOPRO", price: 100 }, { symbol: "GOLDMAN", price: 200 }]
}, {
	name: "S&P500",
	stocks: [{ symbol: "DISNEY", price: 100 }, { symbol: "JPMORGAN", price: 39 }]
}];
console.log("EGGHEAD Asynchronous Programming: The End of The Loop course.");
var handlerFunc = function handlerFunc(e) {
	alert('clicked');
	//map over array elements
	var expensiveStocks = exchanges.map(function (exchange) {
		console.log(exchange.name);
		return exchange.stocks.filter(function (stock) {
			console.log('filtering');
			return stock.price >= 100;
		});
	});
	console.log("expensive stocks");
	console.log(JSON.stringify(expensiveStocks));
};
button.addEventListener('click', handlerFunc);

},{"./addition":1}]},{},[2]);
