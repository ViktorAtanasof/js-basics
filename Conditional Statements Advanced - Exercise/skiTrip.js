function skiTrip(input) {
    let day = Number(input.shift());
    let roomType = input.shift();
    let score = input.shift();
    let days = 0;
    days = day - 1;
    let priceForDay = 0;

    switch (roomType) {
        case 'room for one person':
            priceForDay = 18;
            break;
        case 'apartment':
            priceForDay = 25;
            break;
        case 'president apartment':
            priceForDay = 35;
            break;
    }

    let totalPrice = priceForDay * days;
    let discountPrice = 0;

    if (roomType == 'apartment') {
        if (days < 10) {
            discountPrice = totalPrice - (totalPrice * 0.30);

        } else if (days > 10 && days < 15) {
            discountPrice = totalPrice - (totalPrice * 0.35);

        } else if (days > 15) {
            discountPrice = totalPrice - (totalPrice * 0.50);

        }

    } else if (roomType == 'president apartment') {
        if (days < 10) {
            discountPrice = totalPrice - (totalPrice * 0.10);

        } else if (days > 10 && days < 15) {
            discountPrice = totalPrice - (totalPrice * 0.15);

        } else if (days > 15) {
            discountPrice = totalPrice - (totalPrice * 0.20);

        }
    } else {
        discountPrice = totalPrice;
    }

    let result = 0;

    if (score == 'positive') {
        result = discountPrice + (discountPrice * 0.25);
    } else if (score == 'negative') {
        result = discountPrice - (discountPrice * 0.10);
    }

    console.log((result).toFixed(2));
}

skiTrip(["2","apartment","positive"]);
