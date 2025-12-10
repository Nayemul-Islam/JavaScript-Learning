const text = "   Hello World Nayem    ";

// for (const c of text) console.log(c); // Itarate over string

let newText = text.trim();  /// Remove White space from start and end

// for (const c of newText) console.log(c);
console.log(newText);


newText = newText.replace("Nayem", "Nirob"); // Replace any word or char to given word or char and return new string
// for (const c of newText) console.log(c);
console.log(newText);


const res = text.split(" "); 
// console.log(res);

newText = newText.slice(1,3);
console.log(newText);
