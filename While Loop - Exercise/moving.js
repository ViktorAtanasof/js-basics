function moving(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let volume = width * length * height;
    let movedCartons = 0;

    while (true) {
        let numCartons = Number(input.shift());
        if (isNaN(numCartons) || numCartons == "undefined" || numCartons == "Done") {
            break;
        }
        else {
            movedCartons += numCartons;
        }
    }

    if (movedCartons > volume) {
        console.log(`No more free space! You need ${Math.abs(movedCartons - volume)} Cubic meters more.`);
    }
    else console.log(`${Math.abs(movedCartons - volume)} Cubic meters left.`);
}

moving(["10", "1", "2", "4", "6", "Done"]);
