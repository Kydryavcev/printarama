let MainElem = document.getElementById("EquipmentBlock");

let back = document.getElementById("back");
let next = document.getElementById("next");

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