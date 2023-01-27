//EVENT LOOP
//setTimeout(() => {
//  console.log('After 2.5s')
//}, 2500)
//Функция setTimeOut осуществляет вызов функции или выполнение фрагмента кода после указанной задержки. В языке JS это классический пример асинхронности, т.к. код выполняется не сразу, а с задержкой

//const timeOut = setTimeout(() => {
//  console.log('After 2.5s')
//}, 2500)
//clearTimeout(timeOut) //данная функция очистит timeOut и таким образом данная функция (setTimeOut, занесённая в переменную timeOut) не вызовется

//Функция setInterval осуществляет вызов функции с определённым интервалом, указанным в мс 
//const interval = setInterval(() => {
//  console.log('olololo')
//}, 1000)
//clearInterval(interval)

//Здесь мы создаём свою собственную функцию, чтобы в дальнейшем с ней работать. Как видим, мы можем в параметры вносить функцию, чтобы потом с ней работать. Честно говоря, не до конца понял, зачем это всё. Как говорит автор, в этом нет смысла, однако, мы сейчас пойдём к промисам
//const delay = (callback, wait = 1000) => {
//  setTimeout(callback, wait)
//}

//delay(() => {
//  console.log('after 2s')
//}, 2000)



//PROMISES - вкратце необходимы чтобы убирать большой уровень вложенности колбеков
const delay = (wait = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
      //reject('try one more time, dude')
    }, wait);
  })
  return promise
}

//delay(2500)
//  .then(() => {
//    console.log('After 2 seconds')
//  })
//  .catch(err => console.error('Error:', err))
//  .finally(() => console.log('Finally'))

//В данном примере мы работали с промисом в отношении синхронного кода, в консоли будет массив чисел Фибоначи
  const getData = () => new Promise (resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
  ]))

  getData().then(data => console.log(data))

//Теперь что-то ещё будет...
async function asyncExample() {
  try {
    await delay(3000)
    const data = await getData()
    console.log('Data', data)
  } catch (e) {
    console.log(e)
  } finally {
    console.log('Finally!')
  }
}

asyncExample()

/*При помощи метода 'await' мы делаем так, что функция getData выполняется только после выполнения ф-ии delay.
В JS есть нативный метод 'try - catch - finally' с помощью которого мы можем работать с кодом в случае ошибки и по его завершению, например, как в данном примере, выводить в консоль сообщение об ошибке*/ 
