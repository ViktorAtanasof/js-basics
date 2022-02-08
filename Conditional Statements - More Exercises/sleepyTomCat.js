function sleepyTomCat(input) {
    let breakDays = Number(input[0]);
    let playingWithTomInBreakDays = breakDays * 127;
    let playingWithTomInWorkDays = (365 - breakDays) * 63;
    let totalPlayingTime = playingWithTomInBreakDays + playingWithTomInWorkDays;

    if (totalPlayingTime > 30000) {
        let diff = Math.abs(30000 - totalPlayingTime);
        let hours = diff / 60;
        let minutes = diff % 60;
        console.log("Tom will run away");
        console.log(`${Math.floor(hours)} hours and ${minutes} minutes more for play`);
    } else if (totalPlayingTime <= 30000) {
        let diff = Math.abs(30000 - totalPlayingTime);
        let hours = diff / 60;
        let minutes = diff % 60;
        console.log("Tom sleeps well");
        console.log(`${Math.floor(hours)} hours and ${minutes} minutes less for play`);
    }
}

sleepyTomCat(["20"]);
