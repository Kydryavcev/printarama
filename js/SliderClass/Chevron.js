class Chevron {
    constructor(chev, flug, childrens, childActive) {
        this._chev         = chev;
        this._flug         = flug;
        this._children     = childrens;
        this._elemActive   = childActive;
        this._chevChildren = Array.from(this._chev.children)
        this._numElements  = this.numElementsFind(this._chevChildren, this._flug);

        this._chev.onclick = this.onClick.bind(this);
    }

    numElementsFind(elems, flug) {
        for (let i = 0; i < elems.length; i++) {
            if (i == 2) {
                elems[i].classList.add(flug);
            }else {
                if (elems[i].classList.contains(flug)){
                    elems[i].classList.remove(flug);
                };
            }                        
        }

        return 2;
    }

    onClick(event) {
        let clickElem    = event.target;
        if (clickElem.tagName != "LI") return;
        let clickElemNum = clickElem.innerHTML;
        this._chevChildren[this._numElements].classList.remove(this._flug);
        this.InactiveOrActive(clickElemNum);
        clickElem.classList.add(this._flug);
    }

    InactiveOrActive(clickElemNum){
        let style;

        if (this._numElements > clickElemNum) {
            style = "slider-active-next";
        } else if (this._numElements < clickElemNum) {
            style = "slider-active-back";
        } else {
            return 0;
        }

        for (let i = 0; i < this._elemActive; i++) {
            let InactiveElem = this._numElements * this._elemActive + i;

            if (this._children[InactiveElem].classList.contains("product")) {
                this._children[InactiveElem].classList = "product";               
            } else if (this._children[InactiveElem].classList.contains("review")) {  
                this._children[InactiveElem].classList = "review";   
            } 

            this._children[InactiveElem].classList.add("no-slider-active");           
        }

        for (let i = 0; i < this._elemActive; i++) {
            let ActiveElem   = clickElemNum * this._elemActive + i;

            if (this._children[ActiveElem].classList.contains("product")) {
                this._children[ActiveElem].classList = "product";               
            } else if (this._children[ActiveElem].classList.contains("review")) {  
                this._children[ActiveElem].classList = "review";   
            } 
            this._children[ActiveElem].classList.add(style);       
        }
    
        this._numElements = clickElemNum;
    }
}