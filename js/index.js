let list1 = document.getElementById("MainListHelp1");
let list2 = document.getElementById("MainListHelp2");

list1.onclick = function (event) {
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

list2.onclick = function (event) {
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