function salary(input) {
    let index = 0;
    let openedTabs = Number(input[index]);
    index++
    let money = Number(input[index]);
    index++
    let isHaveMoney = true;

    for (let i = 0; i < openedTabs; i++) {
        let currentOpenTab = input[index];
        index++;

        if (currentOpenTab === "Facebook") {
            money -= 150
        } else if (currentOpenTab === "Instagram") {
            money -= 100
        } else if (currentOpenTab === "Reddit") {
            money -= 50
        }

        if (money <= 0) {
            isHaveMoney = false;
            console.log("You have lost your salary.");
            break;
        }
    }

    if (money > 0) {
        console.log(money);
    }
}

salary(["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"]);
