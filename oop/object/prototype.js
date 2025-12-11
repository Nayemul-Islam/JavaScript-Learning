// A coustom method for changing a char in given index
String.prototype.changeAt = function (index, char) {
  if (index < 0 || index >= this.length) return this;
  return this.substring(0, index) + char + this.substring(index + 1);
};
let name = "Nayem";
name = name.changeAt(1, "b");
console.log(name);

Array.prototype.customMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};


const arr = [1, 2, 3, 4, 5, 5];

console.log(arr.customMap((el) => el * 2));
