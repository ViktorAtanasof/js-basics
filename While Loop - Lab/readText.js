function readText(input) {
    let index = 0;
    let element = (input[index]);

    while (element !== "Stop") {
        console.log(element);
        index++
        element = input[index];
    }
}

readText(["Sofia",
    "Berlin",
    "Moscow",
    "Athens",
    "Madrid",
    "London",
    "Paris",
    "Stop",
    "AfterStop"]);
