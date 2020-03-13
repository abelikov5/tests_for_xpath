require("chromedriver");
const {Builder, Key, By, until} = require("selenium-webdriver");
const assert = require('assert');

describe("Автоскрипт type #1", () => {
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it("Простой автоматический скрипт", async () => {

    await driver.get('https://moskva.beeline.ru/shop');
        //Ищем и кликаем на вкладку ТЕЛЕФОНЫ;
    const searchTel = await driver.findElement(By.xpath("//*[text() = 'телефоны']"));
    await searchTel.click();
        //Ищем и кликаем на "Показать всех производителей";
    let searchShowAll = await driver.findElements(By.xpath("//span[@class='ShowAllButton_text_VwKl']"));
    await searchShowAll[1].click();
        //Ищем и кликаем на "Yandex";
    let searchProdYandex = await driver.findElement(By.xpath("//span[@class='content' and text() = 'Yandex']"));
    await searchProdYandex.click();
        //Делаем проверку
        //????? Подскажите пожалуйста как вывести h1 текстовое значение чтобы сделать проверку ??????
    const titleH1 = await driver.findElement(By.xpath("//h1"));
    await titleH1.getText();
    console.log("Test, Text", titleH1);
        
    });

    // after(() => driver.quit());
});