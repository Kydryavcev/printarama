let MainElem = document.getElementById("EquipmentBlock");

let ElemetsEquipment = Array.from(MainElem.children);

let length = ElemetsEquipment.length

let back = document.getElementById("back");
let next = document.getElementById("next");

back.onclick = function(event) {
    first = MainElem.firstElementChild;
    last = MainElem.lastElementChild;
    MainElem.firstElementChild.remove()
    MainElem.insertAdjacentHTML('beforeend', first.outerHTML);
}

next.onclick = function(event) {
    first = MainElem.firstElementChild;
    last = MainElem.lastElementChild;
    MainElem.lastElementChild.remove()
    MainElem.insertAdjacentHTML('afterbegin', last.outerHTML);
}