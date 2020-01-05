$(document).ready(function(){
    //CLICK
    const clickBox = document.getElementById("clickBox");
    clickBox.addEventListener('click',function(){
        alert("You click green box");
    })
    //HOVER
    const hover = document.getElementById("hoverBox");
    hover.addEventListener('mouseover',function(){
        this.style.background = "yellow";
    })
    hover.addEventListener('mouseout',function(){
        this.style.background = "darkcyan";
    })
  
    // KEYPRESS
    const keypress = document.getElementById("text");
    const show = document.getElementById("key");
    keypress.addEventListener("keypress",function(e){
        show.innerHTML = e.key;
    })
    // Clear button
    const clear = document.getElementById("clear");
    clear.addEventListener("click",function(){
        show.innerHTML = "";
        keypress.value = "";
    })
    //Mouse position
    const mouse = document.getElementById("mouse-pos");
    const tooltip = document.getElementById("tooljs");
    mouse.addEventListener('mousemove', function(e){
        tooltip.innerHTML = ("Position X:"+e.pageX +"Position Y:"+ e.pageY);
    })
    mouse.addEventListener('mouseout', function(){
        tooltip.innerHTML = "";   
    })
    //Event + 
    const buttons = document.getElementsByClassName("btn");
    buttons[0].addEventListener('click',function(){
        alert(this.innerText);
    })
    buttons[1].addEventListener('click',function(){
        alert(this.innerText);
    })
    
    // ****************Functions**********************
    // hide
    const hide = document.getElementById("hide");
    const box  = document.getElementById('box');
    hide.addEventListener('click', function(){
        box.style.display = "none";
    })
    //show
    const showEle = document.getElementById("show");
    showEle.addEventListener('click', function(){
        box.style.display = "";
    })
    //hide molten
    const hMolten = document.getElementById("hide-mol");
    hMolten.addEventListener('click',function(){
        box.classList.add('hid');
        box.classList.remove('sho');
    })
    //show molten
    const sMolten = document.getElementById("show-mol");
    sMolten.addEventListener('click',function(){
        box.classList.add('sho');
        box.classList.remove('hid');

    })
    //function for change color
    function randomColor() {
        const deg = Math.random() * 360;
        return `hsl(${deg}, 60%, 50%)`;
     }
    //function iterate elements div 
    const ibtn = document.getElementById('iterate-ele');
    ibtn.addEventListener('click',function(){
        const elements = document.getElementsByClassName('ele');
        for(var i = 0; i< elements.length; i++){
            const color = randomColor();
            elements[i].style["background-color"] = color;

        }
    })
    //get parent element
    const partentBtn = document.getElementById('get-parent');
    partentBtn.addEventListener('click',function(){
        const color = randomColor();
        this.parentNode.style["background-color"] = color;
    })
    //Get the collection of children of a certain element (if that element has children)
    const parent = document.getElementById('groupElements');
    const childrens = parent.querySelectorAll('button');
    const dischild = document.getElementById('infoChild');
    for(var i = 0 ; i < childrens.length; i++){
        let p = document.createElement('p');
        let node = document.createTextNode(childrens[i].className);
        p.appendChild(node);
        dischild.appendChild(p);
    }
    // get all elements by class name
    const classbox = document.getElementsByClassName('box2');
    for(var i = 0; i < classbox.length; i++){
        classbox[i].style.border = "3px solid black";

    }
    // get item by id
    const boxEle = document.getElementById('box');
    boxEle.addEventListener('click',function(){
        alert(this);
    })
    //find hidden elements
    const btnHidden = document.getElementById('hidden-element');
    const hiddenEle = document.getElementById('hidden');
    btnHidden.addEventListener('click',function(){
        hiddenEle.style.display = "inline";
    })
    //Get those options of a select element that are selected (attribute selected)
    const selector = document.getElementById('selector');
    selector.addEventListener('change',function(){
        const optSele = selector.options[selector.selectedIndex].value;
        alert(optSele);
    })
    // //Change the href attribute of the first <a> element (Create an <a> element to test this case)
    const aEle = document.getElementById('a-ele');
    aEle.setAttribute('href','https://www.w3schools.com');
    // //Create a new <p> element with text inside the dom of your page
    const pParent = document.getElementById('box-select');
    let newP = document.createElement('p');
    let textP = document.createTextNode("New 'p' element");
    newP.appendChild(textP);
    pParent.appendChild(newP);
    // //Show an alert with the value of the first <input> of the page (Create an <input> element to test this case)
    const invalu = document.getElementById('text2');
    invalu.addEventListener('change',function(){
        alert(this.value);
    })
    // //Remove all items from a specific selector
    const remBtn = document.getElementById('remove-element');
    const infchild = document.getElementById('infoChild');
    let test =  infchild.querySelectorAll("p");
    remBtn.addEventListener('click',function(){
        for(var i= 0 ; i < test.length; i++){
            infchild.removeChild(test[i]);
        }
    })
    // //Animate an item after 2 seconds from the initial page load
    const anim = document.getElementById('hello');
    setTimeout(function(){
        anim.classList.add('animate');
    },2000);
     })