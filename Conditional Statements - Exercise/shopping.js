function shopping(input) {
    let budget = Number(input[0]);
    let gpu = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);

    let gpuPrice = gpu * 250;
    let cpuPrice = cpu * (gpuPrice * 0.35);
    let ramPrice = ram * (gpuPrice * 0.10);
    let allcompsPrice = gpuPrice + cpuPrice + ramPrice;
    let discount = 0;
    let moneyLeft = 0;

    if (gpu > cpu) {
        discount = allcompsPrice * 0.15;
        allcompsPrice = allcompsPrice - discount;
    }
    if (allcompsPrice <= budget) {
        moneyLeft = budget - allcompsPrice;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        moneyLeft = Math.abs(budget - allcompsPrice);
        console.log(`Not enough money! You need ${moneyLeft.toFixed(2)} leva more!`);
    }
}

shopping(["920.45","3","1","1"]);
