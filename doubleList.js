class ListElement {
  constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
  }
  setValue(value) {
      this.value = value;
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

  cut() {
      let p = this.getPrev();
      let n = this.getNext();
      this.next = null;
      this.prev = null;

      if (p != null) {
          p.setNext(n);
      } else if (n != null) {
          n.setPrev(p);
      }
  }

  swap(element) {
      let p = this.getPrev();
      let n = this.getNext();
      let p2 = element.getPrev();
      let n2 = element.getNext();

      this.setPrev(p2);
      p2.setNext(this);
      element.setNext(n);
      n.setPrev(element);

      if (n == element) {
          this.prev = element;
          element.next = this;
      }

      if (n2 != null) {
          this.setNext(n2);
          n2.setPrev(this);
      } else {
          this.next = null;
      }

      if (p != null) {
          element.setPrev(p);
          p.setNext(element);
      } else {
          element.prev = null;
      }
  }
}

// -------------------------------------------------
let el1 = new ListElement();
let el2 = new ListElement();
let el3 = new ListElement();
let el4 = new ListElement();
let el5 = new ListElement();

el1.setNext(el2);
el2.setNext(el3);
el3.setNext(el4);
el4.setNext(el5);

el1.setValue(10);
el2.setValue(20);
el3.setValue(30);
el4.setValue(40);
el5.setValue(50);

console.log(el1);
console.log(el2);
console.log(el3);
console.log(el4);
console.log(el5);

console.log("for el2 getNext: ", el2.getNext());

console.log("for el5 getPrev: ", el5.getPrev());

console.log('el1.value =', el1.value);

console.log("Check for swap");
el2.swap(el5);
let el = el1;
do {
  console.info("el:" + el.value);
  el = el.getNext();
} while (el != null);

// console.log("Check for cut");
// el4.cut();

el = el1;
do {
  console.info("el:" + el.value);
  el = el.getNext();
} while (el != null);