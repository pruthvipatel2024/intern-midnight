let prices = [250, 645, 300, 900, 50];
let dis = 0;
for (let price of prices) {
    let dis = price / 10;
    price = price - dis;
    console.log(price);
}
