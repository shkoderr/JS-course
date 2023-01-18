//1 Numbers
//const num = 42 //integer
//const float = 42.42 //float
//const pow = 10e3 // pow

//console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
//console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
//console.log('Math.pow', Math.pow(2, 53) - 1)
//console.log('MAX_VALUE', Number.MAX_VALUE)
//console.log('MIN_VALUE', Number.MIN_VALUE)
//console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
//console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
//console.log(Number.NaN) //Not a Number, we can recieve it by doing wrong operations with numbers like in the next strings of code
//const weird = 2 / undefined
//console.log(Number.isNaN(weird))
//console.log(Number.isNaN (42))
//console.log(Number.isFinite(Infinity))
//console.log(Number.isFinite(42))

//const stringInt = '40'
//const stringFloat = '40.42'

//console.log(Number.parseInt(stringInt) + 2) //parseInt or Float lets you turn a string into a number
//console.log(parseInt(stringInt) + 2) //a standart of typing this one
//console.log(Number(stringInt) + 2) //in next two examples you can see how to do it easier
//console.log(+stringInt + 2)

//console.log(parseInt(stringFloat) + 2) //parseInt works with only integers, so in this case it just ignores numbers after dot.
//console.log(parseFloat(stringFloat) + 2) 
//console.log(+stringFloat + 2) 

//console.log(0.4 + 0.2) //we anticipate to see 0.6, but instead of this we'll see this one: 0.6000000000000001. I'll read about it later
//console.log((0.4 + 0.2).toFixed(1)) //toFixed lets us to eliminate numbers after dot. You just need to choose how many of them will be shown in a console. In this case I've chosen to show one number after dot. But it's not enough as we receive a string instead of a number.
//console.log(parseFloat((0.4 + 0.2).toFixed(1))) //in order to turn it into a number we add 'parseFloat'


// 2 BigInt - a new type of data which is made to operate with big numbers (which are more than max-safe-integer)
//console.log(90071992547409919999999n) //in order to create a bigint add 'n' at the end of a number
//console.log(90071992547409919999999n - 9007199254740991999999n) //we can work with bigints
//console.log(-90071992547409919999999.22222n) //bigint according to its name don't work with floats

//console.log(10n - 4) //we can't mix bigint with other types of data
//console.log(parseInt(10n) - 4) //we can turn bigint into a number
//console.log(10n - BigInt(4)) //or on the contrary we can turn a number into bigint
//console.log(5n / 2n) //we'll see '2' because as we knew earlier bigint works with only integers


// 3 Math
//console.log(Math.E)
//console.log(Math.PI)

//console.log(Math.sqrt(49)) //'sqrt' is a method which find a square root of any number 
//console.log(Math.pow(5, 3)) //'pow' is a method which turn any number into some degree
//console.log(Math.abs(-42)) //'abs' turns a number into its module
//console.log(Math.max(12, 42, 89, 37, 5))
//console.log(Math.min(12, 42, 89, 37, 5))
//console.log(Math.floor(4.9)) //округляет всегда в меньшую сторону
//console.log(Math.ceil(4.2)) //округляет всегда в большую сторону
//console.log(Math.round(4.7)) //округляет число к ближайшему целому числу
//console.log(Math.trunc(4.7)) //вщзвращает целую часть числа путём удаления всех дробных 
//console.log(Math.random()) //выдаёт рандомное число


// 4 Exapmple  -  I gotta figure out how iy works later!
//function getRandomBetween (min, max) {
//  return Math.floor(Math.random() * (max - min + 1) + min)  
//}

//console.log(getRandomBetween(10, 42))




