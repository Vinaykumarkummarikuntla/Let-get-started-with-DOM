var headerTitle=document.getElementById("header-title")
var header = document.getElementById('main-header');
console.log(header.style.borderBottom = 'solid 3px #000');

var item = document.getElementById("item")

item.style.fontWeight = 'bold';
item.style.color = 'green';

//     Using getElementsByClassName

// let items = document.getElementsByClassName("list-group-item")
// console.log(items)
// items[2].style.backgroundColor = 'yellow'
// for(let i = 0;i<=items.length;i++){
//     items[i].style.fontWeight = 'bold';
// }

//      Using getElementTagName

let it = document.getElementsByTagName("li")
// console.log(it[0])
// console.log(it[1])
// console.log(it[3])
it[0].style.backgroundColor = 'red';


// for(let i = 0;i<=it.length;i++){
//     it[i].style.backgroundColor = 'red';
// }
