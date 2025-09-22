const { URL, URLSearchParams } = require('url');

// Базовий URL
const url = new URL("https://bank.gov.ua/NBU_Exchange/exchange_site");

// Додаємо параметри одразу
url.search = new URLSearchParams({
  date: "20231001",   // 1 жовтня 2023
  period: "q",        // квартал
  json: ""            // ключ без значення
});

// Виводимо результат
console.log(url.toString());
