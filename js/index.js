let list1 = document.getElementById("MainListHelp1");
let list2 = document.getElementById("MainListHelp2");

list1.onclick = ChevronList;
list2.onclick = ChevronList;

function ChevronList(event) {
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
let back     = document.getElementById("back-sponsors");
let next     = document.getElementById("next-sponsors");

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

let ProductsBlock   = document.getElementById("ProductsBlock");
let ChevronProducts = document.getElementById("ListProductChevron");
let PagesBlock      = document.getElementById("PagesBlock");
let ChevronPages    = document.getElementById("ListPagesChevron");
let ReviewsBlock      = document.getElementById("ReviewsBlock");
let ChevronReviews  = document.getElementById("ChevronReview");

let WinSize = window.innerWidth;
let FlugProduct, FlugChev;

let Products       = new Slider(ProductsBlock);
let ChevronProduct = new Chevron(ChevronProducts, "active", Products._elemChildren, Products._activeElement);

let Pages          = new Slider(PagesBlock);
let ChevronPage    = new Chevron(ChevronPages, "active", Pages._elemChildren, Pages._activeElement);

let ReviewBlock    = new Slider(ReviewsBlock);
let ChevronReview  = new Chevron(ChevronReviews, "active", ReviewBlock._elemChildren, ReviewBlock._activeElement);

window.onresize = function (event) {
    if (WinSize < 769) {
        ElemDischarge(ProductsBlock, ChevronProduct, Products._elemChildren);
        ElemDischarge(Pages, ChevronPages, Pages._elemChildren);
    }else if (WinSize > 769 && WinSize < 1219){
        ElemDischarge(ProductsBlock, ChevronProduct, Products._elemChildren);
        ElemDischarge(Pages, ChevronPages, Pages._elemChildren);
    }    
}

function ElemDischarge(block, chevron, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].classList.contains("slider-active-back")) {
            arr[i].classList.remove("slider-active-back");
        } else if (arr[i].classList.contains("slider-active-next")){
            arr[i].classList.remove("slider-active-next");
        }
    }

    switch (block) {
        case ProductsBlock:
            Products       = new Slider(ProductsBlock);
            ChevronProduct = new Chevron(ChevronProducts, "active", Products._elemChildren, Products._activeElement);       
            break;

        case Pages:
            Pages       = new Slider(PagesBlock);
            ChevronPage = new Chevron(ChevronPages, "active", Pages._elemChildren, Pages._activeElement);          
            break;
    }
}