function sumOfNumbers(input) {
    let nums = input[0];
    let sum = 0;

    for (i = 0; i < nums.length; i++) {
        let currentSum = Number(nums[i]);
        sum += currentSum;
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["1234"]);
