class Stack {
  #a = [];
  #recentPopedItem;

  // Push new element
  push(item) {
    this.#a.push(item);
  }

  // Pop element from stack
  pop() {
    if (this.isEmpty()) return undefined;

    this.#recentPopedItem = this.#a.pop();
    return this.#recentPopedItem;
  }

  // Check if stack is empty
  isEmpty() {
    return this.#a.length === 0;
  }

  // Get top item
  top() {
    if (this.isEmpty()) return undefined;
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
}

const st = new Stack();

st.push(10);
st.push(20);
st.push(50);
st.push(2);

// print stack
while (!st.isEmpty()) {
  console.log(st.top());
  st.pop();
}
