class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if ((!this.head) || index < 0) {
      return -1; // there is nothing to show  / out of bounds
    }

    let current = this.head
    let counter = 0;
    while (current) {
      if (index === counter) {
        return current.value;
      }
      counter++;
      current = current.next;
    }
    return -1; // not found/out of bounds
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val) {
    const newNode = new ListNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val) {
    const newNode = new ListNode(val);

    if (!this.tail) {
      this.tail = newNode;
      this.head = this.tail;
    }
    this.tail.next = newNode;
    this.tail = newNode
  }
  // {value: 1, next:{value: 2, next:{value: 3, next:null}}}

  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index) {
    if ((!this.head) || index < 0) {
      return false;
    }

    if (index === 0) {
      this.head = this.head.next;
      return true
    }

    let current = this.head;
    let counter = 0;

    // [ [val =1, next: 2],    [value = 2, next: 3],     [value = 3, next:  4],   [value = 4, next: null], ]
    while (current) {
      // i need the value before the one that'll be deleted; {value: 1, next:{value: 2, next:{value: 3, next:null}}}
      if (index === counter + 1 && current.next) {
        // 3      1    this.current == 0 / this.head   
        // 3      2    this.current == 1    
        // 3      3    this.current == 2  
        // 3      4    this.current == 3 / this.tail 
        if (current.next === this.tail) {

          this.tail = current;
          this.tail.next = null;
          return true;
        }

        current.next = current.next.next;
        return true;
        // there is not nessecity to explicitly delete the node, we make it orphand (unreacheble) so the 
        // garbage collector will delete it later
      }
      counter++;
      current = current.next;
    }
    return false;

  }

  /**
   * @return {number[]}
   */
  getValues() {
    const values = [];
    if (!this.tail) {
      return [];
    }
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next
    }
    return values;
  }
}