function foodDelivery(input){
    let chickenMenu = Number(input[0]*10.35);
    let fishMenu = Number(input[1]*12.40);
    let vegetarianMenu = Number(input[2]*8.15);

    let menuPrice = chickenMenu + fishMenu + vegetarianMenu;
    let dessertPrice = menuPrice * 0.20;
    let totalSum = menuPrice + dessertPrice + 2.50;

    console.log(totalSum);

}

foodDelivery(["2","4","3"]);
