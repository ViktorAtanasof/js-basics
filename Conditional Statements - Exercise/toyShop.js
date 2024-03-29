function toyShop(input) {
    let priceVacation = Number(input[0]);
    let puzzle = Number(input[1]);
    let talkingDoll = Number(input[2]);
    let teddyBear = Number(input[3]);
    let minion = Number(input[4]);
    let truckToy = Number(input[5]);

    let toyPrice = puzzle * 2.60 + talkingDoll * 3 + teddyBear * 4.10 + minion * 8.20 + truckToy * 2;
    let toyCount = puzzle + talkingDoll + teddyBear + minion + truckToy;
    let shopRent = 0;
    let sumTotal = 0;
    let totalProfit = 0;

    if (toyCount >= 50) {
        toyPrice = toyPrice * 0.75;
        shopRent = toyPrice * 0.10;
        totalProfit = toyPrice - shopRent;
    } 
    if (totalProfit >= priceVacation) {
        sumTotal = totalProfit - priceVacation;
        console.log(`Yes! ${sumTotal.toFixed(2)} lv left.`);
    }
    if (toyCount < 50) {
        shopRent = toyPrice * 0.10;
        totalProfit = toyPrice - shopRent;
    }
    if (totalProfit < priceVacation) {
        sumTotal = Math.abs(totalProfit - priceVacation);
        console.log(`Not enough money! ${sumTotal.toFixed(2)} lv needed.`);
    }
}

toyShop(["320","8","2","5","5","1"]);
