class Slider {
    constructor (elem) {
        this._elem          = elem;
        this._elemChildren  = Array.from(this._elem.children);
        this._activeElement = this.activeElementFind(this._elemChildren);
    }

    activeElementFind(elems) {
        let actElems = 0;

        for (let i = 0; i < elems.length; i++) {
            let elem = getComputedStyle(elems[i]);
            if (elem.display == "block") actElems++;           
        }

        return actElems;
    }
}