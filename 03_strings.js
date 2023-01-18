//const name = 'Timur'
//const age = 26

//function getAge() {
//  return age
//}

//const output = 'Hi, my name is ' + name + ' and I am ' + age + ' years old.' 
//const output = `Hi, my name is ${name} and I am ${age} years old` //using grave accent you can do the same with no concotinations
//const output = `Hi, my name is ${name} and I am ${getAge()} years old` //you can also use functions
//const output = `Hi, my name is ${name} and I am ${age > 30 ? '26' : '31'} years old` //you can also use ternarias, but you can't use classic if/else operators

//const output = `
//  <div>This is div</div>
//  <p>this is p</p>
//`

//Here we're working with some operations on strings
//const name = 'Timur'

//console.log(name.length)
//console.log(name.toUpperCase())
//console.log(name.toLowerCase())
//console.log(name.charAt(2))
//console.log(name.indexOf('mur')) //2 - index of start this piece of string
//console.log(name.indexOf('!')) //in this case we'll get '-1' 
//console.log(name.startsWith('Tim'))
//console.log(name.toLowerCase().startsWith('tim'))//we can use more than one methods
//console.log(name.endsWith('mur')) 
//console.log(name.repeat(5))

//const string = '         password         '
//console.log(string.trim()) //deletes all spaces
//console.log(string.trimStart())
//console.log(string.trimEnd())


//function logPerson(s, name, age) {
//  if (age < 0) {
//    age = 'Ещё не родился'
//  }
//  return  `${s[0]}${name}${s[1]}${age}${s[2]}`
//}

//const personName = 'Тимур'
//const personName2 = 'Егор'
//const personAge = 26
//const personAge2 = -2

//const output = logPerson`Имя: ${personName}, Возраст: ${personAge} лет`
//const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}.`

//console.log(output)
//console.log(output2)