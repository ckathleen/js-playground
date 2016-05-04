//import {sumTwo} from 'addition';
var sumTwo = require('./addition');
console.log("1+3", sumTwo(1,3));
let x = 5;
console.log(x);

var button = document.createElement('button');
var btnText = document.createTextNode("click me!");
var header = document.createTextNode("BABEL(ES6) -> BROWSERIFY(REQUIRE) ");
var div = document.getElementById('div1');

button.appendChild(btnText);

document.body.appendChild(header);
document.body.appendChild(button);


var exchanges = [
{
	name:"NYSE",
	stocks: [
		{symbol: "GOPRO", price: 100 },
		{symbol: "GOLDMAN",price: 200}
	]
},
{
	name:"S&P500",
	stocks: [
		{symbol: "DISNEY", price: 100},
		{symbol: "JPMORGAN",price: 39}
	]
}
];
console.log("EGGHEAD Asynchronous Programming: The End of The Loop course.");
var handlerFunc = (e) => {
	alert('clicked');
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
};
button.addEventListener('click', handlerFunc);


