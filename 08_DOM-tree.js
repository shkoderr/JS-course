//window.alert(1)
//window.prompt('What is your name?')
//window.confirm('Wanna beer?')
//В данных примерах мы видим, что на самом деле все эти методы являются методами глобального объекта window, но необходимости каждый раз писать это нет, т.к. метод глобальный

//Далее мы рассмотрим методы взаимодействия JS с элементами DOM
//const heading = document.getElementById('hello')
//console.log(heading) //мы получим в консоли следующее:  <h1 id="hello">Hello, world!</h1>
//console.dir(heading) //мы получим тег в виде объекта со своими свойствами
//console.dir(heading.id) //мы получим айдишник элемента, т.е. hello
//console.dir(heading.textContent) //получаем Hello, world!
//heading.textContent = `what's up, dude!` //таким образом мы можем изменить текстовое содержимое тега h1
//heading.style.color = 'blue' //т.к. наш h1 тег посредством айдишника взят из документа и добавлен в переменную heading, используя его мы можем работать с ним, например меняя стили
//heading.style.textAlign = 'center' //отцентровали текст
//heading.style.backgroundColor = 'yellow'
//heading.style.padding = '2rem'


//Теперь, исполбзуя callback функцию, можем установить таймаут на изменения стилей тега h1
//setTimeout(() => {
//  addStylesTo(heading2)
//}, 2000);

//Теперь мы создадим функцию, которая будет изменять стили любому выбранному элементу в DOM
function addStylesTo(node) {
  node.textContent = `what's up, dude!` 
  node.style.color = 'blue'
  node.style.textAlign = 'center' 
  node.style.backgroundColor = 'yellow'
  node.style.padding = '2rem'
}


//Теперь поработаем с другим элементом нашего DOM tree, но у которого нет id, в данном случае нам необходимо использовать нижележащий метод и в brackets необходимо указать порядковый номер данного тега в DOM.
//const heading2 = document.getElementsByTagName('h2')[0] //Однако, данный метод считается устаревшим, поэтому попробуем другой вариант
//const heading2 = document.getElementsByClassName('h-2')[0] //этот метод тоже не комильфо, идём дальше
const heading = document.getElementById('hello') //Now we can work with both elements on the page
const heading2 = document.querySelector('#subhello') 
/*Данный метод получает доступ к элементу DOM-дерева через CSS-селектор, т.е. это может быть как селектор по классу, по тегу или id элемента, данный метод хорош и универсален. В данном случае мы выбрали селектор по id 
NB! С помощью него можно получить доступ только к одному э-ту! */ 

//Теперь мы хотим получить элемент h2 без класса (Альбукерке жжёт который). Есть два способа:
//console.dir(heading2) // 1: в консоли мы увидим множество методов, среди которых nextElementSibling, в нём лежит необходимый нам следующий h2 элемент, чтобы получить его вызовем данный метод в коде
//const heading3 = heading2.nextElementSibling
//2: можем использовать querySelectorAll, выбрать все h2 элементы на странице, занести их в переменную (h2List), и у данной переменной выбрать индекс 1, по которому лежит нужный нам h2 тег
const h2List = document.querySelectorAll('h2')
//const heading3 = h2List[1]
//либо можем использовать метод length 
const heading3 = h2List[h2List.length - 1]
//console.log(heading3) //получим наш тег  <h2>Альбукерке жжёт!</h2>


setTimeout(() => {
  addStylesTo(heading, 'Чё каво сучара!')
}, 2000);

setTimeout(() => {
  addStylesTo(heading2, 'Альбукерке жжёт!', 'blue')
}, 3500);

const link = heading3.querySelector('a')

link.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('click on link', event.target.getAttribute('href'))
  const url = event.target.getAttribute('href')
  window.location = url
})

setTimeout(() => {
  addStylesTo(link, 'Я на связи!', 'green', '2rem')
}, 5000);

function addStylesTo(node, text, color = 'red', fontSize) {
  node.textContent = text
  node.style.color = color
  node.style.textAlign = 'center' 
  node.style.backgroundColor = 'yellow'
  node.style.padding = '2rem'
  node.style.display = 'block'
  node.style.width = '100%'
  //falsy: '', undefined, null, 0, false
  if (fontSize) {
    node.style.fontSize = fontSize
  } 
}


//Events (События), рассмотрим 2 способа добавления событий: 
//https://developer.mozilla.org/ru/docs/Web/Events
//1 метод:
heading.onclick = () => {
  if (heading.style.color === 'red') {
    heading.style.color = 'black'
    heading.style.backgroundColor = 'aquamarine'
  } else {
    heading.style.color = 'red'
    heading.style.backgroundColor = 'yellow'
  }
}

//2 метод:
heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'blue') {
      heading2.style.color = 'yellow'
      heading2.style.backgroundColor = 'blue'
    } else {
      heading2.style.color = 'blue'
      heading2.style.backgroundColor = 'yellow'
    }
})


