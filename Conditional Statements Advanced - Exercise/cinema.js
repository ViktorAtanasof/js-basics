function cinema(input) {
    let ticket = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let gain = 0;

    if (ticket === "Premiere") {
        gain = r * c * 12.00;
    } else if(ticket === "Normal") {
        gain = r * c * 7.50;
    } else if(ticket === "Discount") {
        gain = r * c * 5.00;
    }
    console.log(`${gain.toFixed(2)} leva`);
}

cinema(["Premiere","10","12"]);
