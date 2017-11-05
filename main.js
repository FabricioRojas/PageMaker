var header =  [
    'First section',
    'Second section',
];
var text =  [
    'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
    'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
    'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
];
var mainTitle = "Page Title";

window.addEventListener("DOMContentLoaded", function() {
    document.title = mainTitle;
    addElement('h1', 'title', mainTitle);
    var topTabElements = ""
    for (var i = 0; i < text.length; i++) {
        var active = i<1?'class="active"':"";
        var title = header[i] !== undefined ? '<div class="header" id="'+header[i].replace(/\s+/g, '').toLocaleLowerCase()+'"><h2>'+header[i]+'</h2><div class="underline"></div></div>' : "";
        if (header[i] !== undefined) topTabElements += '<a href="#'+header[i].replace(/\s+/g, '').toLocaleLowerCase()+'"><li '+active+'>'+header[i]+'</li></a>'
        addElement('div', 'content', title + '<div class="text"><p>'+text[i]+'</p></div>', i);
    }   
    addElement('ul', 'topTab', topTabElements);
    addElement('a', 'footer', mainTitle);
    document.getElementById("topTab").addEventListener("click", function(e) {
        for(var i=0;i<this.getElementsByTagName("li").length;i++) this.getElementsByTagName("li")[i].classList.remove('active');
        e.srcElement.classList.add('active');
    }, false);
    
}, false);

function addElement(element, node, string){
    var elm = document.createElement(element);
    elm.innerHTML = string; 
    if(node === "footer") elm.href = "#"
    document.getElementById(node).appendChild(elm);
}