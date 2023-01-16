// 1 Variables

//const firstName = 'Timur'

//const age = 26 //number
//const isProgrammer = true //boolean

//const _ = 'some'
//const $ = 'thing'
//const withNum5 = '5'

//const if = 'mkef' //error because key words aren't allowed to be used as variables
//const 5withNum = '5' //error beacuse it's prohibited to create variables starting with number


// 2 Мутирование 
//console.log('Human name is: ' + firstName + ', and his age is ' + age)
//alert('Human name is: ' + firstName + ', and his age is ' + age)

//const lastName = prompt('Введите фамилию')
//alert(firstName + ' ' + lastName)

//3 Операторы
//let currentYear = 2023
//const birhtYear = 1996

//const a = 10
//const b = 5

//let c = 32
//c = c + a
//c = c -a 
//c = c * a
//c = c / a
//c += a
//c -= a
//c *= a
//c /= a

//console.log(a + b)
//console.log(a - b)
//console.log(a * b)
//console.log(a / b)
//console.log(++currentYear) //оператор ++ инкрементирует значение переменной на 1 единицу (от англ. increment «увеличение») 
//console.log(--currentYear) //оператор -- декрементирует значение переменной на 1 единицу (от англ. decrement «уменьшение»)
//console.log(c)

//Типы данных (5 - примитивные типы данных)
//const isProgrammer = true
//const name = 'Timur'
//const age = 26
//let x
//null

//console.log(typeof isProgrammer)
//console.log(typeof name)
//console.log(typeof age)
//console.log(typeof x)
//console.log(null)


// 5 Приоритет операторов (Operator precedence)
//const fullAge = 26
//const birthYear = 1996
//const currentYear = 2023

//const isFullAge = currentYear - birthYear >= fullAge 
//console.log(isFullAge)


// 6 If/else operators
//const courseStatus = 'fail' // ready, fail, pending

//if (courseStatus === 'ready') {
//  console.log('Course is ready now and you can attend it')
//} else if (courseStatus === 'pending') {
//  console.log('Course is being developed so far')
//} else {
//  console.log('Course has been messed up')
//}

//const isReady = true

//if (isReady) {
//  console.log('Everything is set up!')
//} else {
//  console.log('Please, wait for a result')
//}

//it's equal to next string of code

//isReady ? console.log('Everything is set up!') : console.log('Please, wait for a result') //Это тернарное выражение (с франц. ternarie - тройной, т.е. оператор в данном случае принимает сразу три значения)

// About double and triple equals
//const num1 = 42 //number
//const num2 = '42' //string

//console.log(num1 === num2)


// 7 Logic operators https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operato


//8 Functions
//function calculateAge(year) {
//  return 2023 - year
//}

//console.log(calculateAge(1996))
//console.log(calculateAge(2013))
//console.log(calculateAge(2002))

//function logInfoAbout (name, year) {
//  const age = calculateAge(year)

//  age > 0 ? console.log('Человеку по имени ' + name + ' сейчас ' + age + ' лет.') : console.log('Actually, it is already future')
  
//}

//logInfoAbout('Тимур', 1996)
//logInfoAbout('Тимур', 2025)


//9 Arrays (массивы)
//const cars = ['Mazda', 'Mersedes', 'Ford'] //it's the simple yet proper way to create arrays
//const cars = new Array('Mazda', 'Mersedes', 'Ford') //here's an alternative one to create arrays (in this case you can see how JS works)
//console.log(cars)
//console.log(cars[0]) //we can select an item of array by calling its index
//console.log(cars.length) //we can find out length of an array using this construction

//cars[0] = 'Porsche' //we can also edit elements in an array
//console.log(cars)
//cars[3] = 'Mazda' //we can even add elements in our array
//cars[cars.length] = 'Audi' //it's the way to add your element in the end of your array
//console.log(cars)


// 10 Loops and iterations (циклы)
//const cars = ['Mazda', 'Mersedes', 'Ford', 'Porsche']

//for (let i = 0; i < cars.length; i++) {  
//  const car = cars[i]
//  console.log(car)
//}

//for (let car of cars) {  // as you can see it's a more simple way 
//  console.log(car)
//}


// 11 Objects - groups of different types of elements. An object includes keys and values 
//const person = {
//  firstName: 'Timur',
//  lastName: 'Birgalin',
//  year: 1996,
//  languages: ['Ru', 'En '], //it's an example of an array in an object
//  hasWife: false,
//  greet: function() { //it's an example of method included in our object
//    console.log('greet from person')
//  }
//}

//console.log(person.firstName) //we can call specific info about our object
//console.log(person['lastName'])
//const key = 'year'
//console.log(person[key])
//person.hasWife = true //we can edit our keys
//console.log(person.hasWife) 
//person.isProgrammer = true //we can also add any keys in our object
//console.log(person['isProgrammer'])
//console.log(person)
//person.greet()











