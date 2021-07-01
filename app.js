console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i=1; i <=100; i++) {
    if(i % 2 == 0) {
        let text = document.createTextNode(i);
        let br = document.createElement("br");
        document.getElementById("exercise-1").appendChild(text);
        document.getElementById("exercise-1").appendChild(br);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
