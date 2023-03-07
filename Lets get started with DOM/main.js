// var headerTitle=document.getElementById("header-title")
// var header = document.getElementById('main-header');
// console.log(header.style.borderBottom = 'solid 3px #000');

// var item = document.getElementById("item")

// item.style.fontWeight = 'bold';
// item.style.color = 'green';

//     Using getElementsByClassName

// let items = document.getElementsByClassName("list-group-item")
// console.log(items)
// items[2].style.backgroundColor = 'yellow'
// for(let i = 0;i<=items.length;i++){
//     items[i].style.fontWeight = 'bold';
// }

//      Using getElementTagName

// let it = document.getElementsByTagName("li")
// // console.log(it[0])
// // console.log(it[1])
// // console.log(it[3])
// it[0].style.backgroundColor = 'red';


// for(let i = 0;i<=it.length;i++){
//     it[i].style.backgroundColor = 'red';
// }


//           QUERYSELECTOR

// var header = document.querySelector(".list-group-item:nth-child(2)")
// console.log(header)
// console.log(header.style.backgroundColor='green');

// var child = document.querySelector(".list-group-item:nth-child(3)")

// console.log(child.style.display='None');


// QUERYSELECTORALL

// var header = document.querySelectorAll(".list-group-item")
// console.log(header)
// header[0].style.backgroundColor = "green"

// var odd = document.querySelectorAll(".list-group-item:nth-child(odd)")
// // console.log(odd)

// for(let i = 0;i<=odd.length;i++){
//         odd[i].style.backgroundColor = 'green';
    // }


// Creating Nodes and Modifying Dom

var itemList = document.querySelector('#items');

//   ParentNode
// console.log(itemList.parentNode)
// itemList.parentNode.style.background = 'blue';
// console.log(itemList.parentNode.parentNode.parentNode)


//    Parent Element
// console.log(itemList.parentElement)
// itemList.parentElement.style.background = 'red';
// console.log(itemList.parentElement.parentElement.parentElement)

//    Children 
// console.log(itemList.childNodes)
// console.log(itemList.children[1])
// console.log(itemList.children[1].style.backgroundColor  = 'blue');

//   First Child
// console.log(itemList.firstChild)
// console.log(itemList.firstChildElement)
//console.log(itemList.firstChild.textContent = 'blue')

//  lastChild
// console.log(itemList.lastChild)

// nextSibling
// console.log(itemList.nextSibling)
// console.log(itemList.nextElementSibling) 

//PreviousSibling
// console.log(itemList.previousSibling) 
// console.log(itemList.previousElementSibling)
// console.log(itemList.previousElementSibling.style.backgroundColor = 'blue') //item

// Create Div

var newDiv = document.createElement('div')
newDiv.className = 'Hello'
newDiv.id = 'hello'
newDiv.setAttribute('Title','Welcome Division')

// console.log(newDiv)

// Create TextNode
var newDivText = document.createTextNode(' Hello world')
newDiv.appendChild(newDivText)
// console.log(newDiv)

// var container = document.querySelector('header .container')
// var h1 = document.querySelector('header h1')
// console.log(newDiv)

// container.insertBefore(newDiv,h1)

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1')
console.log(newDiv)

container.insertBefore(newDiv,h1)


var itemsList = document.getElementById('items');
var newItem = document.createElement('li');
var textNode = document.createTextNode('Hello world');
newItem.appendChild(textNode);
itemsList.insertBefore(newItem, itemsList.childNodes[0]);








