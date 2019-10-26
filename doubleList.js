class ListElement {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  getNext() {
    return this.next;
  }

  setNext(element) {
    this.next = element;
    if (element != null) {
      element.prev = this;
    }
  }

  getPrev() {
    return this.prev;
  }

  setPrev(element) {
    this.prev = element;
    if (element != null) {
      element.next = this;
    }
  }
}

// -------------------------------------------------
let el1 = new ListElement(1);
let el2 = new ListElement(2);
let el3 = new ListElement(3);
let el4 = new ListElement(4);

console.log(el2);
el1.setNext(el2);
el2.setNext(el3);
el3.setNext(el4);
console.log(el3.getPrev());
