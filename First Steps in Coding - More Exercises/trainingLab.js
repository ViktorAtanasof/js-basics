function trainingLab(input) {
    let w = Number(input[0] * 100);
    let h = Number(input[1] * 100) - 100;
    let hallway = 100;
    let columns = Math.floor(h / 70);
    let rows = Math.floor(w / 120);
    let totalSpace = columns * rows - 3;

    console.log(totalSpace);

}

trainingLab(["15", "8.9"]);
