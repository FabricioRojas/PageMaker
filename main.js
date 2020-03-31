window.addEventListener("DOMContentLoaded", function() {
document.title = stringToUtf8(MAIN_TITLE);
addElement('h1', 'title', MAIN_TITLE,'','');
let topTabElements = ""
for(let i=0;i<PAGE_CONTENT.length;i++){
    let active = i<1?'class="active"':"";
    let title = PAGE_CONTENT[i].header !== undefined ? '<div class="header" id="'+stringToUtf8(PAGE_CONTENT[i].header).replace(/\s+/g, '').toLocaleLowerCase()+'"><h2>'+stringToUtf8(PAGE_CONTENT[i].header)+'</h2><div class="underline"></div></div>' : "";
    topTabElements += '<a href="#'+stringToUtf8(PAGE_CONTENT[i].header).replace(/\s+/g, '').toLocaleLowerCase()+'"><li '+active+'>'+stringToUtf8(PAGE_CONTENT[i].header)+'</li></a>'
    for(let j=0;j<PAGE_CONTENT[i].text.length;j++){
        title = j<1?title:"";
        addElement('div', 'content', title + '<div class="text"><p>'+stringToUtf8(PAGE_CONTENT[i].text[j])+'</p></div>',PAGE_CONTENT[i].background,PAGE_CONTENT[i].font);
    }
}
addElement('ul', 'topTab', topTabElements,'','');
addElement('a', 'footer', MAIN_TITLE,'','');
document.getElementById("topTab").addEventListener("click", function(e) {
    for(let i=0;i<this.getElementsByTagName("li").length;i++) this.getElementsByTagName("li")[i].classList.remove('active');
    e.srcElement.classList.add('active');
}, false);

}, false);

function addElement(element,node,string,back,text){
let elm = document.createElement(element);
elm.innerHTML = string; 
elm.style.padding = "0 50px 0px"; 
elm = addElementStyle(elm, back, text)
if(node === "footer") elm.href = "#"
document.getElementById(node).appendChild(elm);
}

function addElementStyle(elm,back,text){
if(back!='')elm.style.backgroundColor = back;
if(text!='')elm.style.color = text;
return elm;
}
function stringToUtf8(s) {
    return decodeURIComponent(escape(s));
};