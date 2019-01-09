/*
// step1
const dataBase = [
	{ username: "raja", password: "secret" },
	{ username: "bobby", password: "super" }
];

const newsFeed = [
	{ username: "Kite", timeline: "A Party with my buddies"	},
	{ username: "Milan", timeline: "Break the ice!" }
];

let userPrompt = prompt("What's your username?"),
	passwordPrompt = prompt("Enter your password");

function signIn(user, pass) {
	if(user === dataBase[0].username &&
	   pass === dataBase[0].password) {
		console.log(newsFeed[0].timeline);
	} else {
		console.error("In correct credentials");
	}
}
signIn(userPrompt, passwordPrompt);

*/



const dataBase = [
	{
		username: "raja",
		password: "secret"
	},
	{
		username: "bobby",
		password: "super"
	},
	{
		username: "kyle",
		password: "abc"
	}
];

const newsFeed = [
	{
		username: "Kite",
		timeline: "A Party with my buddies"
	},
	{ 
		username: "Milan",
		timeline: "Break the ice!"
	},
	{ 
		username: "Bhasha",
		timeline: "Life is beautiful!"
	}
];

let userPrompt = prompt("What's your username?"),
	passwordPrompt = prompt("Enter your password");



function isUserValid(username, password) {
	for( var i =0; i < dataBase.length; i++	) {

		if(dataBase[i].username === username &&
			dataBase[i].password === password) {
			return true;
		}
	}
	return false;
}


function signIn(username, password) {
	// console.log(isUserValid(username, password));
	 if(isUserValid(username, password)) {
	 	// console.log(newsFeed);

	 	console.log();
	 } else {
	 	alert("Sorry, wrong username and password");
	 }
}
signIn(userPrompt, passwordPrompt);



//LOOPS
// const todoList = [
// 	"30 mins CSS",
// 	"2 hour JS",
// 	"1 hour Angular",
// 	"30 mins SCSS",
// 	"40 mins HTML"
// ];

// let len = todoList.length;
// for (let i=0; i<len; i++) {
// 	// console.log('for:',`${i} ${todoList[i]} !`);
// 	// todoList[i] = todoList[i] +'!';
// //	todoList.pop();
// 	console.log(todoList);
// }

// let j=0;
// while (j<=todoList.length-1) {
// 	console.log('while:', `${todoList[j]} `);
// 	j++;
// }
// let counter = 0;
// while( counter <= 10) {
// 	console.log('Count: ', counter);
// 	counter++;
// }

// let counter = 9;
// while( counter > 0) {
// 	console.log('Count: ', counter);
// 	counter--;
// }

// let counter=10;
// do {
// 	console.log('do:', `${counter} `);
// 	counter--;
// } while(counter > 0);

// ES5
// forEach

// todoList.forEach(function(item, i) {
// 	console.log(i,  item);
// });

// let todoItems = function todoItems(item, i) {
// 	console.log(item, i);
// }
// todoList.forEach(todoItems);

// for of & for in
// for( let todo of todoList) {
// 	console.log('of loop:', todo);
// 	// console.log('in loop:', todo);
// }















