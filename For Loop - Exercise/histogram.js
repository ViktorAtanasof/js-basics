function histogram(input) {
    let n = Number(input[0]);
    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;

    for (let a = 1; a <= n; a++) {
        if (input[a] < 200) {
            p1Count++;
        } else if (input[a] >= 200 && input[a] < 400) {
            p2Count++;
        } else if (input[a] >= 400 && input[a] < 600) {
            p3Count++;
        } else if (input[a] >= 600 && input[a] < 800) {
            p4Count++;
        } else {
            p5Count++;
        }
    }
    let p1 = p1Count / n * 100;
    let p2 = p2Count / n * 100;
    let p3 = p3Count / n * 100;
    let p4 = p4Count / n * 100;
    let p5 = p5Count / n * 100;

    console.log(p1.toFixed(2) + "%");
    console.log(p2.toFixed(2) + "%");
    console.log(p3.toFixed(2) + "%");
    console.log(p4.toFixed(2) + "%");
    console.log(p5.toFixed(2) + "%");
}

histogram(["3","1","2","999"]);
