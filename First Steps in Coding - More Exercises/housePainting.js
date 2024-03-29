function housePainting(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let sideWall = x * y;
    let sideWindow = 1.5 * 1.5;
    let totalSizeForSideWalls = 2 * sideWall - 2 * sideWindow;
    let backWall = x * x;
    let door = 1.2 * 2;
    let totalSizeForFrontAndBackWalls = 2 * backWall - door;
    let totalSize = totalSizeForFrontAndBackWalls + totalSizeForSideWalls;

    let roofSides = 2 * (x * y);
    let roofFrontAndBack = 2 * (x * h / 2);
    let totalSizeRoof = roofSides + roofFrontAndBack;

    let greenColor = totalSize / 3.4;
    let redColor = totalSizeRoof / 4.3;

    console.log(greenColor.toFixed(2));
    console.log(redColor.toFixed(2));
}

housePainting(["6", "10", "5.2"]);
