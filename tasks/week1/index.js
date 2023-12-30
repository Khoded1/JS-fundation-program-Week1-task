/* 
TASK 1
Define an object to represent a mobile phone.
It should have 5 properties: brand, model, color, battery size (in mAh), and price.
It should also perform 5 actions (methods): switch on, switch off, make phone call, send text message, and take photo.
The methods can simply log a message to the console based on what it does.
Name the properties and methods accordingly.
*/
const mobilePhone = {
	brandName: 'Tecno Camon 17',
	model: 'Tecno CG6',
	color: 'Dark blue',
	batterySize: '5000mAh',
	Price: 126000,
};

switch (mobilePhone) {
	case 'switch on':
		console.log('Switching on...');
		break;
	case 'switch off':
		console.log('Switching off...');
		break;
	case 'make phone call':
		console.log('calling Michael....');
		break;
	case 'send text message':
		console.log('Sending message to Bert Simpson...');
		break;
	case 'take photo':
		console.log('Take some pictures of us');
		break;
}
/*
TASK 2
Follow each comment below and write the JavaScript code that does what it describes
*/

// 1. DECLARE A VARIABLE TO STORE THE FIRST NAME OF A USER AS "Bart"
// 2. DECLARE A VARIABLE TO STORE THE LAST NAME OF THE USER AS "Simpson"
// 3. DECLARE A VARIABLE TO STORE THE BIRTH YEAR OF THE USER AS 1979
// 4. DECLARE A VARIABLE TO STORE THE AGE OF A USER, BY SUBTRACTING THEIR BIRTH YEAR FROM THE CURRENT YEAR (2023)
// 5. DECLARE A VARIABLE TO STORE THE FULL NAME OF THE USER, BY CONCATENATING THEIR FIRST AND LAST NAMES
// 6. LOG THE USER'S AGE TO THE CONSOLE
// 7. LOG THE USER'S FULL NAME TO THE CONSOLE

//SOLUTION
const firstName = 'Bart';
const lastName = 'Simpson';
const birthYear = 1979;
const age = 2023 - birthYear;
const fullName = `${firstName} ${lastName}`;
// console
console.log(age);
console.log(fullName);

/*
TASK 3
Show how you can use a for...in and a for...of loop to get all the car brands from the array below
*/
const cars = [
	{ id: 1, color: 'green', brand: 'Mercedes', isInGoodCondition: false },
	{ id: 2, color: 'orange', brand: 'Volkswagen', isInGoodCondition: true },
	{ id: 3, color: 'yellow', brand: 'Toyota', isInGoodCondition: true },
	{ id: 4, color: 'red', brand: 'Honda', isInGoodCondition: true },
	{ id: 5, color: 'white', brand: 'Hyundai', isInGoodCondition: false },
];
//FOR... IN
// for (x in cars) {
// 	console.log(x);
// }
//FOR... OFF
// for (x of cars) {
// 	console.log(x);
// }
for (let i = 0; i < cars.length; i++) {
	console.log(cars[i].brand);
}

/*
TASK 4
Using the cars array in TASK 3, write the code that corresponds to the following comments
*/

// 1. LOOP THROUGH ALL THE CARS IN THE CARS ARRAY
// 2. CHECK IF EACH CAR IS IN GOOD CONDITION OR NOT
// 3. IF THE CAR IS IN GOOD CONDITION, LOG "[brand] is in good condition", where [brand] is the brand of the car
// 4. IF THE CAR IS NOT IN GOOD CONDITION, LOG "[brand] needs to be fixed", where [brand] is the brand of the car
// Hint: you can use string concatenation to combine the brand and the rest of the text

//.1
for (let i = 0; i < cars.length; i++) {
	console.log(cars[i].brand);
}
//.2
for (let i = 0; i < cars.length; i++) {
	console.log(cars[i].isInGoodCondition);
}
//.3

/*
TASK 5
Comment the most appropriate data type for each of the following variables and assign corresponding values.
I have assigned empty strings to all of them to prevent any errors. You must change the values to the appropriate data type.
*/

// Example - Scenario 1: User Information
const userName = 'user3605'; // String
const userAge = 37; // Number
const isSubscribed = false; // Boolean

// Scenario 2: Product Details
const productName = 'Khoded Soap'; // String
const productPrice = 14; //Number
const inStock = 700; //Number
const features = 'good for washing and clearning'; //string

// Scenario 3: Weather Information
const temperature = 354; //Number
const isSunny = 'true'; //Boolean

// Scenario 4: Book Details
const bookTitle = 'Programming Foundation'; //String
const authorDetails = 'Michael Salam'; //String
const isBestseller = ' true'; //Boolean

// Scenario 5: User Preferences
const favoriteColors = 'Dark Green'; // String
const hasPets = 'false'; //Boolean

// Scenario 6: Dynamic Content
let dynamicValue = 45; //Number
