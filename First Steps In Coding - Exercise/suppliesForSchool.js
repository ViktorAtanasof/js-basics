function suppliesForSchool(input){
    let pens = Number(input[0]*5.80);
    let markers = Number(input[1]*7.20);
    let cleaningSpray = Number(input[2]*1.20);
    let discount = Number(input[3]);
    let sum = pens + markers + cleaningSpray;
    let totalSum = sum - sum * discount/100;

    console.log(totalSum);

}

suppliesForSchool(["2","3","4","25"]);
