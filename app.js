console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
console.log("Exercise 1 Odd counting method");
for (let i = 1; i <= 100; i += 2) {
    console.log(`Odd - ${i}`);
    let text = document.createTextNode(i);
    let br = document.createElement("br");
    document.getElementById("exercise-1").appendChild(text);
    document.getElementById("exercise-1").appendChild(br);
}
console.log("Exercise 1 Modulo method using if/else");
for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(`Odd - ${i}`);
        let text = document.createTextNode(i);
        let br = document.createElement("br");
        document.getElementById("exercise-1b").appendChild(text);
        document.getElementById("exercise-1b").appendChild(br);
    }
    else {

    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i}-FIZZBUZZ`);
        let text = document.createTextNode(`${i} - FIZZBUZZ`);
        let br = document.createElement("br");
        document.getElementById("exercise-2").appendChild(text);
        document.getElementById("exercise-2").appendChild(br);
    }
    else if (i % 3 == 0) {
        console.log(`${i}-FIZZ`);
        let text = document.createTextNode(`${i} - FIZZ`);
        let br = document.createElement("br");
        document.getElementById("exercise-2").appendChild(text);
        document.getElementById("exercise-2").appendChild(br);
    }
    else if (i % 5 == 0) {
        console.log(`${i}-BUZZ`);
        let text = document.createTextNode(`${i} - BUZZ`);
        let br = document.createElement("br");
        document.getElementById("exercise-2").appendChild(text);
        document.getElementById("exercise-2").appendChild(br);
    }
}
