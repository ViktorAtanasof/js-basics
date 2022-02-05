function godzillavsKong(input) {
    let movieBudget = Number(input[0]);
    let extras = Number(input[1]);
    let clothingPrice = Number(input[2]);

    let extrasPrice = extras * clothingPrice;
    let decorPrice = movieBudget * 0.10;
    let totalPrice = 0;


    if (extras > 150) {
        extrasPrice = extrasPrice * 0.90;
    }
    let sumPrice = extrasPrice + decorPrice;

    if (sumPrice <= movieBudget) {
        totalPrice = movieBudget - sumPrice;
        console.log("Action!");
        console.log(`Wingard starts filming with ${totalPrice.toFixed(2)} leva left.`);
    } else {
        totalPrice = Math.abs(movieBudget - sumPrice);
        console.log("Not enough money!");
        console.log(`Wingard needs ${totalPrice.toFixed(2)} leva more.`);
    }
}

godzillavsKong(["20000","120","55.5"])'
