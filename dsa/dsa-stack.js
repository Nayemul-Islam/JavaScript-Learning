class Stack {
  #a = [];
  #recentPopedItem;

  // Push new element
  push(item) {
    this.#a.push(item);
  }

  // Pop element from stack
  pop() {
    if (this.isEmpty()) return null;

    this.#recentPopedItem = this.#a.pop();
    return this.#recentPopedItem;
  }

  // Check if stack is empty
  isEmpty() {
    return !this.#a.length;
  }

  // Get top item
  top() {
    if (this.isEmpty()) return null;
    return this.#a[this.#a.length - 1];
  }

  // Get recently popped item
  recentPopItem() {
    return this.#recentPopedItem;
  }

  // Get size of stack
  size() {
    return this.#a.length;
  }

  // Print Stack Function
  print() {
    for (const val of this.#a) console.log(val);
  }
}

const st = new Stack();

st.push(10);
st.push(20);
st.push(50);
st.push(2);

// print stack
st.print();

st.print();
