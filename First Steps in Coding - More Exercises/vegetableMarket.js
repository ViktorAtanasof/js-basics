function vegShop(input) {
    let priceVegs = Number(input[0]);
    let priceFruits = Number(input[1]);
    let vegKG = Number(input[2]);
    let fruitsKG = Number(input[3]);

    let sumVegs = priceVegs * vegKG;
    let sumFruits = priceFruits * fruitsKG;
    let sumTotal = sumVegs + sumFruits;
    let sumTotalInEuro = sumTotal / 1.94

    console.log(sumTotalInEuro.toFixed(2));
}

vegShop(["0.194", "19.4", "10", "10"]);
