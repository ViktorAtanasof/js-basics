function circleAreaAndPerimeter(input) {
    let r = Number(input[0]);
    let circleFace = Math.PI * r * r;
    let perimeter = 2 * Math.PI * r;

    console.log(`${circleFace.toFixed(2)}`);
    console.log(`${perimeter.toFixed(2)}`);
}

circleAreaAndPerimeter(["3"]);
