//Objects
//const person = {
//  name: 'Timur',
//  age: 26,
//  isProgrammer: false, 
//  languages: ['ru', 'en'],
//  greet: function() {           //we can make it shorter by deleting 'function'. It would be like this - greet() {   }
//    console.log('greet from Timur')
//  }
//}

//We can address to object properties by two ways:
//console.log(person.name) //we can separate property and property value by dot 
//console.log(person['age']) //or we can use brackets and quotes to do the same thing

//We can also create complex properties (keys) and their values like in this example
//const person = {
//    name: 'Timur',
//    age: 26,
//    isProgrammer: false, 
//    languages: ['ru', 'en'],
//    //'complex key': 'Complex Value', //by using quotes
//    //['key_' + (1 + 3)]: 'Computed Key', //or by using brackets, we can even add - key_4
//    greet() {
//      console.log('greet from Timur')
//    }
//  }

//console.log(person['complex key']) //so we need to use brackets when we want to access to complex properties

////we can change property values
//person.age++ 
//person.languages.push('de')
////we can make values invisible. in this case we want to do this with 'Computed Key' value
//person['key_4'] = undefined
//console.log(person)
//console.log(person['key_4']) //so, we get this property: 'key_4: undefined'
////But, if we need to completely remove a property, we can use 'delete' method
//delete person['key_4']
//console.log(person) //now, we removed this property 


//Destructurization
//const name = person.name
//const age = person.age 
//const languages = person.languages

//As you can see it duplicates code which isn't good for us. In JS we can do it much easier, let's take a look
//const {name, age, languages} = person 
//We can even take values from properties and put them into other varibles using ':'
//const {name, age: personAge, languages} = person
//console.log(name, personAge, languages) //we get different variables


//We can extract property names from an object using this syntax
//for (let key in person) {
  //if (person.hasOwnProperty(key)) {
//  console.log('key:', key)
//  console.log('value:', person[key])
//  }
//}
//! 'for in' is dangerous due to its ability to work not only with properies and its values, but also with prototype of an object. In order to avoid this problem we should use 'if' operator. 'hasOwnProperty' метод проверяет есть ли объект указанное свойство в качестве собственного свойства объекта. В данном случае мы выводим значения в консоль только в том случае, если объект 'person' имеет собственное свойство 'key'.

//We can do this operation much easier and safely using a global method 'Object.keys' Данный метод получает ключи указанного объекта. 'Object.keys' при этом не работает с прототипом объекта
//const keys = Object.keys(person) //we get property names as an array and we can operate with an array
//const keys = Object.keys(person)
//keys.forEach((key) => { //forEach method performs the specified action for each element in an array
//  console.log('key:', key)
//  console.log('value:', person[key])
//})

//Moreover we don't need to create a new variable in order to work with it
//Object.keys(person).forEach((key) => { 
//  console.log('key:', key)
//  console.log('value:', person[key])
//})
//Метод Object.keys получает ключи выбранного объекта


//Context
const person = {
  name: 'Timur',
  age: 26,
  isProgrammer: false, 
  languages: ['ru', 'en'],
  //'complex key': 'Complex Value', //by using quotes
  //['key_' + (1 + 3)]: 'Computed Key', //or by using brackets, we can even add - key_4
  greet() {
    console.log('greet from Timur')
  },
  info() {
    console.log('this: ', this) 
    console.info('Информация про человека по имени:', this.name)
  }
}

//Короче, тут препод объясняет про то почему надо использовать именно 'this', а не обращаться к имени объекта. Ща мы будем создавать свой собственный объект 'логгер с нужными нам методами'

//const logger = {
//  keys() {
//    console.log('Object keys: ', Object.keys(this)) 
//  },
//  keysAndValues() {
//    // "key": value
//    Object.keys(this).forEach(key => {
//      console.log(`"${key}": ${this[key]}`)
//    })
//    Object.keys(this).forEach(key => { 
//      console.log(`"${key}": ${this[key]}`)
//    })
//  }
//}

//logger.keysAndValues.call(person)

/*Если мы используем не стрелочную, а обычную фукнцию (...forEach(function () {}...), то function задаст новый контекст и "перебьёт" контекст 'this'. Мы можем это исправить 2-мя способами:

*/
//const logger = {
//  keys() {
//    console.log('Object keys: ', Object.keys(this)) 
//  },
//  keysAndValues() {
//    // "key": value
//    //Object.keys(this).forEach(key => {
//    //  console.log(`"${key}": ${this[key]}`)
//    //})
//    //1. внести контекст this в переменную до объявления функции и указать его вместо this.
//    const self = this
//    Object.keys(this).forEach(function(key) { 
//      console.log(`"${key}": ${self[key]}`)
//    })
//  }
//}

const logger = {
  keys() {
    console.log('Object keys: ', Object.keys(this)) 
  },
  keysAndValues() {
    // "key": value
    //Object.keys(this).forEach(key => {
    //  console.log(`"${key}": ${this[key]}`)
    //})
    //2. Либо мы можем использовать метод 'bind', который оставляет свой собственный контекст, т.е. привязать bind вне функции к this
    Object.keys(this).forEach(function(key) {
      console.log(`"${key}": ${this[key]}`)
    }.bind(this))
  },
  //сейчас мы работаем с параметрами чтобы управлять отображением
  withParams(top = false, between = false, bottom = false) {
    if (top) {
      console.log('----------Start----------')
    }
    Object.keys(this).forEach((key, index, array) => { //у callback функции forEach есть три параметра и мы можем указать это в условии
      console.log(`"${key}": ${this[key]}`)
      if (between && index !== array.length - 1) {
        console.log('-------------')
      }
    })
    if (bottom) {
      console.log('---------End----------')
    }
  }
}

logger.withParams.call(person, true, true, true)
//Есть ещё один способ apply, он отличается от call тем, что принимает только 2 параметра и 2-й параметр является массивом
logger.withParams.apply(person, [true, true, true])

//Используем ключевое слово 'this' чтобы привязать наш метод к логгеру, при выводе в консоль в данном случае получим 'keys' т.к. метод Object пробежался по ключам в логгере, в котором только 'keys' и есть. Тоже самое будет, если мы 'this' заменим на 'logger'

//const bound = logger.keys.bind(person)
//bound() 
/*Теперь мы можем вызывать метод 'bind' у метода 'keys' и сразу создадим переменную bound чтобы в дальнейшем работать с ней. Метод bind привязывает контекст (в данном случае он привязывает this к объекту person) и возвращает нам новую функцию , назовём её 'bound'. 
При вызове функции 'bound()' мы получаем keys (properry names) объекта person.*/

//logger.keys.call(person) 
//Метод 'call' делает тоже самое что и 'bind', но после привязки контекста к чему-либо, сразу вызывает данную функцию, что лишает нас необходимости создавать отдельную переменную для вывода результата метода.
