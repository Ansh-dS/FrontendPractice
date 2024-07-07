class Area {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    get getLength() {
        return this.length;
    }

    get getWidth() {
        return this.width;
    }

    set setLength(val1) {
        this.length = val1;
    }

    set setWidth(val2) {
        this.width = val2;
    }
}
