const { error } = require("selenium-webdriver");
const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const fs = require('fs');

(async function main() {
  console.log("comenzando prueba");

  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().headless())
    .build();

  console.log("driver creado");

  const url = "https://www.dolarito.ar/";
  const sidebar = "/html/body/div[1]/div[1]/div/div[2]/button"
  const conversor = "/html/body/div[3]/div/div[2]/div/div/div/div/div[3]/button/div/p"
  const convDolar = "/html/body/div[3]/div/div[2]/div/div/div/div/div[3]/div/div/span[1]"
  const imput = "/html/body/div[1]/div[2]/div[2]/div/div[3]/div[1]/div[2]/div/div/input"
  const blue = "/html/body/div[1]/div[2]/div[2]/div/div[3]/div[2]/div[2]/div[2]/div/input"

  console.log(`abriendo ${url}`);
  console.log(`buscando ${sidebar}`);
  console.log(`buscando ${conversor}`);
  console.log(`buscando ${convDolar}`);
  console.log(`buscando ${imput}`);
  console.log(`buscando ${blue}`);

 // try {
 //   await driver.manage().window().setSize(1920, 1080); // Ajusta el ancho y alto según tus necesidades
 // } catch (error) {
 //   console.error(`abrir en 1080: ${error}`);
 //   await driver.quit();
 //   throw Error("error al abrir el 1080");
 // }
 // console.log("ventana abierta");

  try {
    await driver.get(url);
  } catch (error) {
    console.error(`error al traer la url: ${error}`);
    await driver.quit();
    throw Error("error al traer la url");
  }
  console.log("url encontrada");

  const screenshot = await driver.takeScreenshot();
  fs.writeFileSync('screenshot.png', screenshot, 'base64');
  console.log("screenshot tomado");

  try {
    await driver.findElement(By.xpath(sidebar)).click();
  } catch (error) {
    console.error(`error al traer sidebar: ${error}`);
    await driver.quit();
    throw Error("error al traer sidebar");
  }
  console.log("sidebar encontrada");

  await driver.sleep(2000);

  const screenshot2 = await driver.takeScreenshot();
  fs.writeFileSync('screenshot2.png', screenshot2, 'base64');
  console.log("screenshot2 tomado");

  try {
    await driver.findElement(By.xpath(conversor)).click();
  } catch (error) {
    console.error(`error en el conversor: ${error}`);
    await driver.quit();
    throw Error("error en el conversor");
  }
  console.log("conversor encontrado");

  await driver.sleep(2000);

  const screenshot3 = await driver.takeScreenshot();
  fs.writeFileSync('screenshot3.png', screenshot3, 'base64');
  console.log("screenshot3 tomado");

  try {
    await driver.findElement(By.xpath(convDolar)).click();
  } catch (error) {
    console.error(`error al convertir Dolar: ${error}`);
    await driver.quit();
    throw Error("error al convertir Dolar");
  }
  console.log("dolar convertido");

  await driver.quit();
  console.log("terminando prueba correctamente");
})();