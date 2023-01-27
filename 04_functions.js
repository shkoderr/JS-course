// 1 Functions
//Function declaration
//function greet (name) {
//  console.log('Hello, ', name, ' !')
//}

////Function expression - this type must be written only before calling the function
//const greet2 = function greet2 (name) {
//  console.log('Hello again, ', name, ' !')
//}

//greet('Timur') 
//greet2('Ksusha')

//console.log(typeof greet)
//console.dir(greet)

// 2 Anonymous functions
//let counter = 0
//const interval = setInterval(function() {
//  if (counter === 5) {
//    clearInterval(interval)
//  } else
//  console.log(++counter)
//}, 1000)

// 3 Arrow function expressions (стрелочные функции)
//function greet(name) {    
//  console.log('Hello, ', name, ' !')  
//}

////Here we're creating our first arrow function
//const arrow = (name) => {
//  console.log('Hello, ', name, ' !') 
//}
////We also can make it even shorter, just watch
//const arrow2 = name => console.log('Hello, ', name, '!')

//arrow('Timur')
//arrow2('Sokol')

////one more example of shortening a code
//const pow2 = num => {
//  return num**2
//}

//console.log(pow2(7))

////okay, let's make it shorter
//const pow = num => num**2 
//console.log(pow(5)) 


// 4 Default parameters (параметры по умолчанию)
//const sum = (a = 40, b = a * 2) => a + b
//console.log(sum(40, 2))  
//console.log(sum())

//function sumAll(...all) {
//  let result = 0
//  for (let num of all) {
//    result += num
//  }
//  return result  
//}

//const res = sumAll (1, 2, 3, 4, 5, 6, 7)
//console.log(res)


//// 5 Closures (замыкания)
//function createMember(name) {
//  return function (lastName) {
//    console.log(name + lastName)
//  }
//}

//const logWithLastName = createMember('Timur')
//console.log(logWithLastName('Birgalin'))
//console.log(logWithLastName('Sokolov'))
