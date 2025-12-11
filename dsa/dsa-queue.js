class Queue {
  #a = [];
  #recentPopedItem;

  // Push new element
  push(item) {
    this.#a.push(item);
  }

  // Pop element from queue
  pop() {
    if (this.isEmpty()) return undefined;

    this.#recentPopedItem = this.#a.shift();
    return this.#recentPopedItem;
  }

  // Check if queue is empty
  isEmpty() {
    return this.#a.length === 0;
  }

  // Get front item 
  front() {
    if (this.isEmpty()) return undefined;
    return this.#a[0];
  }

  // Get recently popped item
  recentPopItem() {
    return this.#recentPopedItem;
  }

  // Get size of queue
  size() {
    return this.#a.length;
  }
}

const st = new Queue();

st.push(10);
st.push(20);
st.push(50);
st.push(2);

// print queue
while (!st.isEmpty()) {
  console.log(st.front());
  st.pop();
}
