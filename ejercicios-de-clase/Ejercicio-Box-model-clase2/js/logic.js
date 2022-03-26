//traer elementos del DOM en Javascript
console.log("LOGIC");
var element = document.getElementById('image')
console.log('elemento',element);

var paragraphList = document.getElementsByClassName('p')
console.log('getElementsByTagName',paragraphList);

var paragraphListByClass = document.getElementsByClassName('paragraph')
console.log('getElementsByTagName',paragraphList);

//como agregar css a un elemento
element.classList.add('title');
let btn = document.getElementById('btn');
btn.addEventListener('click', changeActive)
console.log("btn", btn)


function changeActive(){
    let paragraph = document.getElementsByClassName('g-text')
       for (let i=0; i<array.length; i++){
        console.log('hola');
    }
}


