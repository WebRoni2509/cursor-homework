let table = 15.678; //price
let chair = 123.965; //price
let bed = 90.2345; //price

let maxPrice = Math.max(table, chair, bed);
console.log('Максимальна ціна: ' + maxPrice);

let minPrice = Math.min(table, chair, bed);
console.log('Мінімальна ціна: ' + minPrice);

let totalAmount = table + chair + bed;
console.log('Загальна вартість:' + totalAmount);

let integerTableValue = Math.floor(table);
let integerChairValue = Math.floor(chair);
let integerBedValue = Math.floor(bed);

let totalIntegerAmount = integerTableValue + integerChairValue + integerBedValue;
console.log('Загальна сума округлена до меншого: ' + totalIntegerAmount);

let roundedToHundred = Math.round(totalIntegerAmount / 100) * 100;
console.log('Округлено до сотні: ' + roundedToHundred);

let isOdd = totalIntegerAmount % 2 === 0 ? "Odd" : "Even";
console.log('Парне чи не парне: ' + isOdd);

let changeSum = 500 - totalAmount;
console.log('Решта з 500: ' + changeSum);

let averageValue = totalAmount / 3;
console.log('Середнє значення цін: ' + averageValue.toFixed(2));

let randomDiscount = Math.floor(Math.random() * 100);
console.log('Випадкова знижка: ' + randomDiscount + '%');

let clientPrice = totalAmount - (totalAmount * randomDiscount) / 100;
console.log('Сума до оплати зі знижкою: ' + clientPrice.toFixed(2));

let clientDiscount = totalAmount - clientPrice;
console.log('Клієнт заощаджує: ' + clientDiscount);

let earnings = (totalAmount / 2) - clientDiscount;
console.log('Чистий прибуток: ' + earnings);
console.log('Собівартість: ' + totalAmount / 2);

document.writeln(`
  Максимальна ціна: ${maxPrice} </br>
  Мінімальна ціна: ${minPrice} </br>
  Загальна вартість: ${totalAmount} </br>
  Загальна сума округлена до меншого: ${totalIntegerAmount} </br>
  Загальна сума округлена до сотень: ${roundedToHundred} </br>
  Парне чи не парне число: ${isOdd} </br>
  Решта з 500: ${changeSum} </br>
  Середнє значення цін: ${averageValue.toFixed(2)} </br>
  Випадкова знижка: ${randomDiscount}% </br>
  Сума до оплати зі знижкою: ${clientPrice.toFixed(2)} </br>
  Клієнт заощаджує: ${clientDiscount.toFixed(2)} </br>
  Собівартість: ${(totalAmount /2.).toFixed(2)} </br>
  Чистий прибуток: ${earnings.toFixed(2)} </br>
`);
