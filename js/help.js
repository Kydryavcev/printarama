let list = document.getElementById("MainListHelp");

list.onclick = function(event) {
    elem = event.target||event.srcElement; 
    
    if (elem.tagName == "H3" || elem.parentElement.tagName == "H3") { 

        if (elem.parentElement.tagName == "H3") {
            elem = elem.parentElement;
        }

        if (elem.nextElementSibling.style.display == "block") {
            elem.nextElementSibling.style.display = "none";
            elem.firstElementChild.style.transform =  "rotate(0deg)"
            return false;
        }
        
        elem.firstElementChild.style.transform =  "rotate(180deg)"
        elem.nextElementSibling.style.display = "block";
    } 
}