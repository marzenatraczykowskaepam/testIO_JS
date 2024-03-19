const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
async function loginTest() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://automate.test.io/");
        await driver.findElement(By.id("email")).sendKeys("marzena_traczykowska@epam.com");
        await driver.findElement(By.id("password")).sendKeys("Password@12345");
        await driver.findElement(By.name("login")).click();
        const pageTitle = await driver.getTitle();
        assert.strictEqual(pageTitle, "Welcomepage");
        await driver.wait(until.titleIs("Welcomepage"), 4000);
    } finally {
        await driver.quit();
    }
}
loginTest();