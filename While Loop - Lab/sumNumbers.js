function sumNumbers(input) {
    let targetSum = Number(input[0]);
    let sum = 0;
    let index = 1;

    while (sum < targetSum) {
        let currentNum = Number(input[index]);
        sum += currentNum;
        index++;
    }
    console.log(sum);
}

sumNumbers(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"]);

