
//1
//Get the element with the id you assigned and save it to a variable . Console.log that variable.
//Make sure you get the element logged in the console:

var myDiv = document.getElementById('scary');
console.log('scary');




//2
//Get the h2 element and save it to a variable h2. Console.log that variable. //check
const h2 = document.querySelector('h2');
console.log('h2');

//3
// Using JavaScript, change the innerText of your h2 to have 3 exclamation points at the end //check
document.querySelector('h2').innerText = 'Welcome to the Salem!!!'

//4
// Get all of the elements with the class you assigned and save them to a variable. Console.log that variable.
document.querySelector("index.h4")
// Make sure you get an array: 
// And not this (a single element)



//5
//Change the style/color of the text of your ONE of your li elements to your favorite html color
// document.querySelctor('li')[1].innerText = color: Hotpink;




//6
//Change the innerText of one of your list items to 'Jamboree sandwich at the Jambo-ree'
document.querySelectorAll('li')[0].innerText = 'Jamboree sandwich at the Jambo-re'
//Create an element and append it


//7
//Create a new img element using document.createElement()
const pumpkin = document.createElement('img')
// pumpkin.src = 'https://newenglandwithlove.com/wp-content/uploads/2020/02/AdobeStock_119830119-1-scaled.jpeg'

//8
//Add an attribute for the source url of your new image using .setAttribute()
pumpkin.setAttribute('src','https://newenglandwithlove.com/wp-content/uploads/2020/02/AdobeStock_119830119-1-scaled.jpeg' )

//9
//Append it to your page, somewhere, using .appendChild()
const container = document.querySelector('.container')
container.appendChild(pumpkin)

//10
// Check that your image has appeared
//It appeared on the webpage!