function multiplicationTable(input) {
    let a = Number(input[0]);

    for (let b = 1; b <= 10; b++) {
        console.log(`${b} * ${a} = ${b * a}`);
    }
}

multiplicationTable(["5"]);
