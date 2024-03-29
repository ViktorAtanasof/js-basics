function pets(input) {
    let days = Number(input[0]);
    let foodLeftInKg = Number(input[1]);
    let foodForDogInKg = Number(input[2]);
    let foodForCatInKg = Number(input[3]);
    let foodForTurtleInG = Number(input[4]);
    let diff = 0;

    let requiredAmountForDog = days * foodForDogInKg;
    let requiredAmountForCat = days * foodForCatInKg;
    let requiredAmountForTurtle = days * (foodForTurtleInG / 1000);
    let totalFoodEaten = requiredAmountForDog + requiredAmountForCat + requiredAmountForTurtle;

    if (totalFoodEaten <= foodLeftInKg) {
        diff = Math.abs(foodLeftInKg - totalFoodEaten);
        console.log(`${Math.floor(diff)} kilos of food left.`);
    } else if (totalFoodEaten > foodLeftInKg) {
        diff = Math.abs(foodLeftInKg - totalFoodEaten);
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }
}

pets(["5", "10", "2.1", "0.8", "321"]);
