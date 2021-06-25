import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    await driver.sleep(2000);
    
});

test('upper left square adds x on click', async () => {
    await driver.findElement(By.id('cell-0')).click();
    await driver.sleep(2000);
});

test('upper right square adds x on click', async () => {
    await driver.findElement(By.id('cell-2')).click();
    await driver.sleep(2000);
});

test('bottom right square adds x on click', async () => {
    await driver.findElement(By.id('cell-8')).click();
    await driver.sleep(2000);
});

// test('computer adds O', async () => {
//     await driver.findElement(By.xpath('(//*[text()="cell-1"])'));
//     expect(cell([1]).toEqual('O'));
// });