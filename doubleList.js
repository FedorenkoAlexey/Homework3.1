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
    }
    if (n != null) {
      n.setPrev(p);
    }
  }

  swap(element) {
    let p = this.getPrev();
    let n = this.getNext();
    let p2 = element.getPrev();
    let n2 = element.getNext();

    if (p != element) {
      if (n == element) {
        this.prev = element;
        element.next = this;
        this.setNext(n2);
        element.setPrev(p);
      } else {
        if (n != null) {
          n.setPrev(element);
          element.setNext(n);
        } else {
          element.next = null;
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
        if (p2 != null) {
          this.setPrev(p2);
          p2.setNext(this);
        } else {
          this.prev = null;
        }
      }
    } else {
      this.next = element;
      element.prev = this;
      this.setPrev(p2);
      element.setNext(n);

      if (p2 == null) {
        this.prev = null;
      } else if (n == null) {
        element.next = null;
      }
    }
  }
}

let el1 = new ListElement();
let el2 = new ListElement();
let el3 = new ListElement();
let el4 = new ListElement();
let el5 = new ListElement();

el1.setNext(el2);
el2.setNext(el3);
el3.setNext(el4);
el4.setNext(el5);
el5.setNext(null);

el1.setPrev(null);
el2.setPrev(el1);
el3.setPrev(el2);
el4.setPrev(el3);
el5.setPrev(el4);

el1.setValue(10);
el2.setValue(20);
el3.setValue(30);
el4.setValue(40);
el5.setValue(50);
