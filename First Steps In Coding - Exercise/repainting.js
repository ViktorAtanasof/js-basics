function repainting(input){
    let protectionNylon = Number(input[0]);
    let painting = Number(input[1]);
    let paintingFilter = Number(input[2]);
    let workingHours = Number(input[3]);

    let protectionNylonTotal = (protectionNylon + 2) * 1.50;
    let paintingTotal = (painting + painting * 0.10) * 14.50;
    let paintingFilterTotal = paintingFilter * 5.00;
    let materialsTotal = protectionNylonTotal + paintingTotal + paintingFilterTotal + 0.40;
    let employeesTotal = (materialsTotal * 0.30) * workingHours;
    let totalSum = materialsTotal + employeesTotal;

    console.log(totalSum);
}

repainting(["10","11","4","8"]);
