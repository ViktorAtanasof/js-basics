function tennisRanklist(input) {
    let s = 0;
    let turnirs = Number(input[s]);
    s++;
    let points = Number(input[s]);
    s++;
    let etap = input[s];
    s++;

    let counter = 0;
    let avrPoints = 0;
    for (let i = 0; i < turnirs; i++) {
        switch (etap) {
            case "W": avrPoints += 2000;
                counter++;
                break;
            case "F": avrPoints += 1200;
                break;
            case "SF": avrPoints += 720;
                break;
        }
        etap = input[s];
        s++;
    }
    let finalPoints = points + avrPoints;
    let avragePointsTurnir = Math.floor(avrPoints / turnirs);
    let procent = ((counter / turnirs) * 100).toFixed(2);
    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${avragePointsTurnir}`);
    console.log(`${procent}%`);

}

tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);
