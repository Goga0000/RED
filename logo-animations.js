const svgUrls=["https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff52171587f265f0cdd13_Logo%3DBreig.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff521b725f1ab5bc8c624_Logo%3DBogach%20Capital.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff521b44b54700cd82811_Logo%3DBD.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff521c97ec991fba484af_Logo%3DBali%20Capital.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff52122fef04ce6e61a2d_Logo%3DBali%20investments.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff521f4c15c547b6f9130_Logo%3DDDA.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff522d4973f2fa0801cc9_Logo%3DDeCosta%20Group%20(Turkey).svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff522567da7d7b0d1d626_Logo%3DAfik%20Group%20(N%20Cyprus).svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff522e1783917bda5521c_Logo%3DHayat%20estate.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff52223bbbf499033e2ad_Logo%3DFazWaz.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff522ed0c50cc2340649a_Logo%3DEtagi.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff522925ef0b82e397e45_Logo%3DEvoSystems.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff5220d95e9e2bea5783d_Logo%3DGP%20Real%20Estate%20(Cyprus).svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff5234e324f785582d826_Logo%3DIberia.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff5231cc881a568c277f8_Logo%3DLegion.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff52343860d1c89827a63_Logo%3DKalinka.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff524806007d1ac42ba57_Logo%3DLike%20house.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff5241f63da943b87b23a_Logo%3DLayan%20verde.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff52495d2e8f27ebe8b8a_Logo%3DMayalanya.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff5242530b87d13caa5ab_Logo%3DMagnum.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff5255fadf1d3047dfe38_Logo%3DMirah.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff525925ef0b82e397f3b_Logo%3DNBA%20Dubai.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff525e00aad53a402a12f_Logo%3DMetropol.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff526618686a9615ec65f_Logo%3DOrbi%20Group.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff526edf9ea9ebefe0d30_Logo%3DRealtika.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff5267a1902d2ff9eca25_Logo%3DNeginsky%20(Dubai).svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff526ebdf4daf1b284356_Logo%3DNext.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff5265f19d0e4ea6e3fa9_Logo%3DRMC%20Deluxe.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff5272ea66e06e2a8bea5_Logo%3DStay%20Property.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff5277b81e975a1d09f08_Logo%3DX2%20Group.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff527f2500fef8eb7d1b6_Logo%3DYenisey.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff5286e1f270f58bb4788_Logo%3DIntermark%20Global.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff5285306ab9068964d88_Logo%3DDGS.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff528618686a9615ec67c_Logo%3DZima%20Dubai.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff528d3da982b2c1a5844_Logo%3DFor%20You%20Real%20Estate.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff5281f63da943b87b2bc_Logo%3DLiga.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff5293360c7d9f3aecdd0_Logo%3DMira%20Real%20Estate.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff529aa022f8bba1743b3_Logo%3DEva%20Real%20Estate.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff5293c64119eb2aefca2_Logo%3DThe%20capital%20of%20dubai.svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff52a806007d1ac42be76_Logo%3DNuanu%20City%20(Bali).svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff52aaa022f8bba1743d4_Logo%3DTheWechsel%20(Cyprus).svg","https://cdn.prod.website-files.com/68c29ced9f49825cfe3be778/68eff52aa1ab0b2b752d7105_Logo%3DVeles.svg",];

const logoItems = Array.from(document.querySelectorAll("#logosGrid .logo-item:not(.ogo-middle)"));
const svgCache = new Map();

// Функция предзагрузки и кэширования SVG
async function preloadSVGs() {
  const promises = svgUrls.map(async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to fetch ${url}`);
      const text = await response.text();
      svgCache.set(url, text);
    } catch (e) {
      console.error(e);
      svgCache.set(url, null);
    }
  });
  await Promise.all(promises);
}

// Обновление логотипа с плавным переходом opacity
async function replaceLogo(item, svgContent) {
  if (!svgContent) return;
  item.style.transition = "opacity 1.5s ease-in-out";
  item.style.opacity = 0;
  await new Promise(r => setTimeout(r, 1500));
  item.innerHTML = `<div class="img w-embed" style="opacity:0; transition: opacity 1.5s ease-in-out;">${svgContent}</div>`;
  requestAnimationFrame(() => {
    const innerDiv = item.querySelector(".img.w-embed");
    if (innerDiv) innerDiv.style.opacity = 1;
    item.style.opacity = 1;
  });
  await new Promise(r => setTimeout(r, 1500));
}

// Функция анимации с ограничением одновременно до 5 логотипов
async function logoCycle() {
  // Первоначальное заполнение всех логотипов
  const shuffledURLs = [...svgUrls].sort(() => Math.random() - 0.5);
  const currentCycleSVGs = shuffledURLs.slice(0, logoItems.length);

  logoItems.forEach((item, idx) => {
    const svg = svgCache.get(currentCycleSVGs[idx]);
    if (svg) {
      item.innerHTML = `<div class="img w-embed" style="opacity:1;">${svg}</div>`;
    }
  });

  while (true) {
    await new Promise(r => setTimeout(r, 2000));

    // Выбираем случайно до 5 логотипов для замены
    const countToReplace = Math.min(5, logoItems.length);
    const indicesSet = new Set();

    while (indicesSet.size < countToReplace) {
      indicesSet.add(Math.floor(Math.random() * logoItems.length));
    }

    // Берём новые случайные SVG для замены
    const replacementSVGs = [...svgUrls].sort(() => Math.random() - 0.5).slice(0, countToReplace);

    // Заменяем выбранные логотипы с анимацией
    const replacePromises = Array.from(indicesSet).map(async (index, i) => {
      const svgContent = svgCache.get(replacementSVGs[i]);
      if (svgContent) {
        return replaceLogo(logoItems[index], svgContent);
      }
      return Promise.resolve();
    });

    await Promise.all(replacePromises);
  }
}

// Запуск
preloadSVGs().then(logoCycle).catch(console.error);
