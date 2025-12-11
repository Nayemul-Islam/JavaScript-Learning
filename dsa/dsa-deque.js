class Deque {
  #a = [];
  #recentPopedItem;

  // Insert at back
  pushBack(item) {
    this.#a.push(item);
  }

  // Insert at front
  pushFront(item) {
    this.#a.unshift(item);
  }

  // Pop element from back
  popBack() {
    if (this.isEmpty()) return undefined;

    this.#recentPopedItem = this.#a.pop();
    return this.#recentPopedItem;
  }

  // pop element from front
  popFront() {
    if (this.isEmpty()) return undefined;

    this.#recentPopedItem = this.#a.shift();
    return this.#recentPopedItem;
  }

  // Check if deque is empty
  isEmpty() {
    return !this.#a.length;
  }

  // Get front item
  front() {
    if (this.isEmpty()) return undefined;
    return this.#a[0];
  }

  // Get back item
  back() {
    if (this.isEmpty()) return undefined;
    return this.#a[this.#a.length - 1];
  }

  // Get recently popped item
  recentPopItem() {
    return this.#recentPopedItem;
  }

  // Get size of deque
  size() {
    return this.#a.length;
  }
}

const st = new Deque();

st.pushFront(10);
st.pushBack(20);
st.pushFront(50);
st.pushBack(2);

// print deque
while (!st.isEmpty()) {
  console.log(st.front());
  st.popFront();
}
