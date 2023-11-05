const { error } = require("selenium-webdriver");
const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

(async function main() {
  console.log("comenzando prueba");

  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().headless())
    .build();

  console.log("driver creado");

  const url = "https://www.dolarito.ar/";
  const conversor = "/html/body/div[1]/div[1]/div/div[3]/div/div[3]/span/a"
  const convDolar = "/html/body/div[1]/div[1]/div/div[3]/div/div[3]/div/section/div/span[1]/a/div/div[1]/p[1]"
  const imput = "/html/body/div[1]/div[2]/div[2]/div/div[3]/div[1]/div[2]/div/div/input"
  const blue = "/html/body/div[1]/div[2]/div[2]/div/div[3]/div[2]/div[2]/div[2]/div/input"

  console.log(`abriendo ${url}`);
  console.log(`buscando ${conversor}`);
  console.log(`buscando ${convDolar}`);
  console.log(`buscando ${imput}`);
  console.log(`buscando ${blue}`);

  try {
    await driver.get(url);
  } catch (error) {
    console.error(`error al traer la url: ${error}`);
    await driver.quit();
    throw Error("error al traer la url");
  }

  console.log("url encontrada");

  await driver.quit();
  console.log("terminando prueba correctamente");
})();