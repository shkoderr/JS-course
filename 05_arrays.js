//Arrays

const cars = ['Mazda', 'Ford', 'BMW', 'Mersedes']

//const people = [
//  {name: 'Timur', budget: 4200},
//  {name: 'Elena', budget: 3500},
//  {name: 'Kseniia', budget: 1700}
//]

const fib = [1, 1, 2, 3, 5, 8, 13]

//Function
function addItemToEnd() {       
  
}

//Method - if we use a function in context of object then it's a method 
//cars.push('Renault') //push - is a method that adds new items to the end of an object (array is also an object)
//cars.unshift('Lada') //this one adds new items to the start of an object
//const firstCar = cars.shift() //shift is a method that deletes first item of an array yet we can work with this deleted item. For example, we can add it as a value to our new variable as you can see in this case.
//const lastCar = cars.pop()  //pop is a method that deletes last item of an array yet we can work with this deleted item. For example, we can add it as a value to our new variable as you can see in this case.
//console.log(firstCar)
//console.log(lastCar)
//console.log(cars)

//console.log(cars.reverse()) //reverse is a method that actually reverses items of an array, but it also changes it after that we get a new array with reversed order
//console.log(cars)

//const index = cars.indexOf('BMW') //'indexOF' method returns us an index of requested item and then we can work with this one, change it. This method works with primitive data. 
//cars[index] = 'Porsche'
//console.log(cars)
/*'findIndex' is similar yet works with more complex things (i.e. objects), btw findIndex' is a loop*/

//Here we are going to creat a loop in order to better understand 'findIndex' method
//let findedPerson
//for (const person of people) {
//  if (person.budget === 3500) {
//    findedPerson = person
//  } 
//}
//console.log(findedPerson)

//Now we're doing the same thing easier
//const index = people.findIndex( function (person) {  
//  return person.budget === 3500
//})
//const person = people.find( function (person) {  //find is the same to previous method, but it finds an item instead of its index
//  return person.budget === 3500
//})
//Here we'll do it even easier using arrow function
//const person = people.find(person => person.budget === 3500)
//console.log(person)

//Includes is a method we use to find out if we have an item in array
//console.log(cars.includes('BMW')) //we'll get 'true' as we have 'BMW' in our array

//Здесь мы рассмотрим методы высокого порядка
//const upperCaseCars = cars.map(car => { /*'Map' calls a defined callback function on each element of an array, and returns an array that
//                                        contains the results. This one always creates a new array or string and doesn't chancge the old*/
//  return car.toUpperCase()
//})
//console.log(upperCaseCars)
//console.log(cars)

//const pow2 = num => num ** 2
//const sqrt = num => Math.sqrt(num)

//const pow2Fib = fib.map(pow2).map(sqrt)
//console.log(pow2Fib)

//Фильтруем массив
//const pow2 = num => num ** 2
//const pow2Fib = fib.map(pow2)
//const filteredNumbers = pow2Fib.filter(num => num > 20)
//console.log(pow2Fib)
//console.log(filteredNumbers)

//'Reduce' method. Решим задачу - сложить бюджет чуваков, у которых он выше 2000 (работаем с объектом 'People')

const people = [
  {name: 'Timur', budget: 4200},
  {name: 'Elena', budget: 3500},
  {name: 'Kseniia', budget: 1700}
]

const allBudget = people
.filter (person => person.budget > 2000)
.reduce((acc, person) => {
  acc += person.budget
  return acc
}, 0)

console.log(allBudget)





//Task 1 - we need to reverse a string
//const text = 'Hi, we are studying JavaScript'
//const reverseText = text.split('').reverse().join('') //Split is a method that splits a string using the specified separator and return them as an array. After we did it, we can use a reverse method. Now we got our array in reversed order, but we also need to tiurn it into a string again (for that we can use 'join' method)
//console.log(reverseText)