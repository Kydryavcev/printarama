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

let MainElem = document.getElementById("SponsorsBlock");

let back = document.getElementById("back-sponsors");
let next = document.getElementById("next-sponsors");

back.onclick = function(event) {
    first = MainElem.firstElementChild;
    last = MainElem.lastElementChild;
    MainElem.lastElementChild.remove()
    MainElem.insertAdjacentHTML('afterbegin', last.outerHTML);
} 

next.onclick = function(event) {
    first = MainElem.firstElementChild;
    last = MainElem.lastElementChild;
    MainElem.firstElementChild.remove()
    MainElem.insertAdjacentHTML('beforeend', first.outerHTML);
}

let ProductsBlock  = document.getElementById("ProductsBlock");

let ChevronProduct = document.getElementById("ListProductChevron");
let ChevronChild   = Array.from(ChevronProduct.children);

let ActiveChevron;

for (let i = 0; i < ChevronChild.length; i++) {
    if (ChevronChild[i].classList.contains("active")) {
        ActiveChevron = ChevronChild[i];
        break;
    }   
}

ChevronProduct.onclick = function (event) {
    elem = event.target||event.srcElement;
    ActiveChevron.classList.remove("active")
    elem.classList.toggle("active");
    number = elem.innerHTML + 1;
    ActiveChevron = ChevronChild[elem.innerHTML];

    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        
    // }
}