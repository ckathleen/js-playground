//import * as addition from 'addition';
//import {sumTwo} from 'addition';
var sumTwo = require('./addition.js');
console.log("1+3 = ", sumTwo(1,3))

import * as math from "lib/math";
console.log("2π = " + math.sum(math.pi, math.pi));

var exchanges = [
{
	name:"NYSE",
	stocks: [
		{	
		symbol: "GOPRO",
		price: 100
		},
		{
		symbol: "GOLDMAN",
		price: 200
		}
	]
},
{
	name:"S&P",
	stocks: [
		{	
		symbol: "DISNEY",
		price: 100
		},
		{
		symbol: "JPMORGAN",
		price: 39
		}
	]
}
]

console.log("EGGHEAD ASYNC PROGRAMMING TUTORIAL");
//map over array elements
var expensiveStocks = exchanges.map((exchange) => {
	console.log(exchange.name);
	return (exchange.stocks).filter((stock) => {
		console.log('filtering');
		return stock.price >= 100;
	});
});
console.log("expensive stocks");
console.log(JSON.stringify(expensiveStocks));

//pure function
var filterfun = (exchange) => {
	//resolves to boolean
	return exchange.name == 'NYSE';
};

var pricesArray = exchanges.filter(filterfun);
console.log("prices array")
console.log(pricesArray);


