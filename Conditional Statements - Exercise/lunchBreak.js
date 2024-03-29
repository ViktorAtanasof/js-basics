function lunchBreak(input) {
    let seriesName = (input[0]);
    let eplength = Number(input[1]);
    let rest = Number(input[2]);
    
    let lunchBreak = rest * 1/8;
    let chillBreak = rest * 1/4;
    let restTime = rest - (lunchBreak + chillBreak);
    let timeLeft = 0;
    let timeNeeded = 0;

    if (restTime >= eplength) {
        timeLeft = restTime - eplength;
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft)} minutes free time.`);
    } else {
        timeNeeded = Math.abs(restTime - eplength);
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones","60","96"]);
