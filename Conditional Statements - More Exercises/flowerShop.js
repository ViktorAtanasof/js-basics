function flowerShop(input) {
    let magnolias = Number(input[0]);
    let hyacinths = Number(input[1]);
    let roses = Number(input[2]);
    let cactuses = Number(input[3]);
    let giftPrice = Number(input[4]);
    let diff = 0;

    let flowersSumWithoutTaxes = magnolias * 3.25 + hyacinths * 4 + roses * 3.50 + cactuses * 8;
    let flowersTotal = flowersSumWithoutTaxes * 0.95;

    if (flowersTotal >= giftPrice) {
        diff = Math.abs(giftPrice - flowersTotal);
        console.log(`She is left with ${Math.floor(diff)} leva.`);
    } else if (flowersTotal < giftPrice) {
        diff = Math.abs(giftPrice - flowersTotal);
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
    }
}

flowerShop(["2", "3", "5", "1", "50.56"]);
