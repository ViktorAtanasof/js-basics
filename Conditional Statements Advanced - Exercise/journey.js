function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    let breakPlace;
    let destination;

    if (season === "summer") {
        breakPlace = "Camp";
    } else if (season = "winter") {
        breakPlace = "Hotel";
    }
    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            price = budget * 0.30;
        } else if (season === "winter") {
            price = budget * 0.70;
        }
    }
    else if (budget <= 1000 ) {
        destination = "Balkans";
        if (season === "summer") {
            price = budget * 0.40;
        } else if (season === "winter") {
            price = budget * 0.80;
        }
    }
    else if (budget > 1000) {
        destination = "Europe";
        if (season === "summer" || season === "winter") {
            price = budget * 0.90;
        } if (destination === "Europe") {
            breakPlace = "Hotel";
        }

    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${breakPlace} - ${price.toFixed(2)}`);
}

journey(["1500","summer"]);
