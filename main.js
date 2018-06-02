var pageContent = [
    {
        'header': 'First section',
        'text': ['1Lorem ipsum dolor sit amet consectetur adipiscing elit neque per sollicitudin taciti, viverra eros turpis rutrum magnis potenti tortor torquent dis posuere, tempus nam sodales fusce bibendum inceptos augue praesent feugiat vulputate. Molestie hendrerit cum placerat varius volutpat sem pellentesque vel nam ridiculus, sociis habitant fusce gravida nunc class faucibus dictumst eleifend, a commodo curae nostra tellus augue quisque rhoncus orci. Condimentum taciti metus himenaeos proin platea pulvinar litora cum nec, risus ridiculus imperdiet dis magna scelerisque sapien hac primis tempus, malesuada dignissim sollicitudin neque lectus nisl libero ante. Viverra mus ultricies blandit pretium eleifend eros sem aliquet, commodo ad platea per turpis ullamcorper. Tristique vulputate vel pretium odio aliquam fermentum interdum, proin dictumst habitasse fusce dis vehicula, pharetra inceptos nisi at cursus placerat. Phasellus dictumst blandit felis molestie vivamus tristique, class cras dui commodo nulla vehicula nibh, ultricies congue augue tempus bibendum. Nulla nibh et tincidunt taciti penatibus himenaeos convallis magnis, neque dapibus hendrerit justo diam etiam nullam, feugiat dui eleifend porta potenti rhoncus nisl.'],
        'background':'',
        'font':''
    },
    {
        'header': 'Second section',
        'text': ['2Lorem ipsum dolor sit amet consectetur adipiscing elit neque per sollicitudin taciti, viverra eros turpis rutrum magnis potenti tortor torquent dis posuere, tempus nam sodales fusce bibendum inceptos augue praesent feugiat vulputate. Molestie hendrerit cum placerat varius volutpat sem pellentesque vel nam ridiculus, sociis habitant fusce gravida nunc class faucibus dictumst eleifend, a commodo curae nostra tellus augue quisque rhoncus orci. Condimentum taciti metus himenaeos proin platea pulvinar litora cum nec, risus ridiculus imperdiet dis magna scelerisque sapien hac primis tempus, malesuada dignissim sollicitudin neque lectus nisl libero ante. Viverra mus ultricies blandit pretium eleifend eros sem aliquet, commodo ad platea per turpis ullamcorper. Tristique vulputate vel pretium odio aliquam fermentum interdum, proin dictumst habitasse fusce dis vehicula, pharetra inceptos nisi at cursus placerat. Phasellus dictumst blandit felis molestie vivamus tristique, class cras dui commodo nulla vehicula nibh, ultricies congue augue tempus bibendum. Nulla nibh et tincidunt taciti penatibus himenaeos convallis magnis, neque dapibus hendrerit justo diam etiam nullam, feugiat dui eleifend porta potenti rhoncus nisl.','Lorem ipsum dolor sit amet consectetur adipiscing elit neque per sollicitudin taciti, viverra eros turpis rutrum magnis potenti tortor torquent dis posuere, tempus nam sodales fusce bibendum inceptos augue praesent feugiat vulputate. Molestie hendrerit cum placerat varius volutpat sem pellentesque vel nam ridiculus, sociis habitant fusce gravida nunc class faucibus dictumst eleifend, a commodo curae nostra tellus augue quisque rhoncus orci. Condimentum taciti metus himenaeos proin platea pulvinar litora cum nec, risus ridiculus imperdiet dis magna scelerisque sapien hac primis tempus, malesuada dignissim sollicitudin neque lectus nisl libero ante. Viverra mus ultricies blandit pretium eleifend eros sem aliquet, commodo ad platea per turpis ullamcorper. Tristique vulputate vel pretium odio aliquam fermentum interdum, proin dictumst habitasse fusce dis vehicula, pharetra inceptos nisi at cursus placerat. Phasellus dictumst blandit felis molestie vivamus tristique, class cras dui commodo nulla vehicula nibh, ultricies congue augue tempus bibendum. Nulla nibh et tincidunt taciti penatibus himenaeos convallis magnis, neque dapibus hendrerit justo diam etiam nullam, feugiat dui eleifend porta potenti rhoncus nisl.'],
        'background':'',
        'font':'white'},
    {
        'header': 'Third section',
        'text': ['3Lorem ipsum dolor sit amet consectetur adipiscing elit neque per sollicitudin taciti, viverra eros turpis rutrum magnis potenti tortor torquent dis posuere, tempus nam sodales fusce bibendum inceptos augue praesent feugiat vulputate. Molestie hendrerit cum placerat varius volutpat sem pellentesque vel nam ridiculus, sociis habitant fusce gravida nunc class faucibus dictumst eleifend, a commodo curae nostra tellus augue quisque rhoncus orci. Condimentum taciti metus himenaeos proin platea pulvinar litora cum nec, risus ridiculus imperdiet dis magna scelerisque sapien hac primis tempus, malesuada dignissim sollicitudin neque lectus nisl libero ante. Viverra mus ultricies blandit pretium eleifend eros sem aliquet, commodo ad platea per turpis ullamcorper. Tristique vulputate vel pretium odio aliquam fermentum interdum, proin dictumst habitasse fusce dis vehicula, pharetra inceptos nisi at cursus placerat. Phasellus dictumst blandit felis molestie vivamus tristique, class cras dui commodo nulla vehicula nibh, ultricies congue augue tempus bibendum. Nulla nibh et tincidunt taciti penatibus himenaeos convallis magnis, neque dapibus hendrerit justo diam etiam nullam, feugiat dui eleifend porta potenti rhoncus nisl.'],
        'background':'',
        'font':''}
];
var mainTitle = "Page Title";

window.addEventListener("DOMContentLoaded", function() {
document.title = mainTitle;
addElement('h1', 'title', mainTitle,'','');
let topTabElements = ""
for(let i=0;i<pageContent.length;i++){
    let active = i<1?'class="active"':"";
    let title = pageContent[i].header !== undefined ? '<div class="header" id="'+pageContent[i].header.replace(/\s+/g, '').toLocaleLowerCase()+'"><h2>'+pageContent[i].header+'</h2><div class="underline"></div></div>' : "";
    topTabElements += '<a href="#'+pageContent[i].header.replace(/\s+/g, '').toLocaleLowerCase()+'"><li '+active+'>'+pageContent[i].header+'</li></a>'
    for(let j=0;j<pageContent[i].text.length;j++){
        title = j<1?title:"";
        addElement('div', 'content', title + '<div class="text"><p>'+pageContent[i].text[j]+'</p></div>',pageContent[i].background,pageContent[i].font);
    }
}
addElement('ul', 'topTab', topTabElements,'','');
addElement('a', 'footer', mainTitle,'','');
document.getElementById("topTab").addEventListener("click", function(e) {
    for(let i=0;i<this.getElementsByTagName("li").length;i++) this.getElementsByTagName("li")[i].classList.remove('active');
    e.srcElement.classList.add('active');
}, false);

}, false);

function addElement(element,node,string,back,text){
let elm = document.createElement(element);
elm.innerHTML = string; 
elm.style.padding = "0 50px 20px"; 
elm = addElementStyle(elm, back, text)
if(node === "footer") elm.href = "#"
document.getElementById(node).appendChild(elm);
}

function addElementStyle(elm,back,text){
if(back!='')elm.style.backgroundColor = back;
if(text!='')elm.style.color = text;
return elm;
}

