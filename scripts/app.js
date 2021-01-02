//declareren variabelen
var purple = document.querySelector(".paars"); //knop paars
var blue = document.querySelector(".blauw"); //knop blauw
var yellow = document.querySelector(".geel"); //knop geel

/**
 * Function SwapToBlue
 * Wanneer er op de blauwe knop wordt gedrukt, zal de body een data theme
 * van blue krijgen. Hierdoor zal het kleurenpallet veranderen.
 */
function swapToBlue() {
    document.body.setAttribute("data-theme", "blue");
}

/**
 * Function SwapToPurple
 * Wanneer er op de paarse knop wordt gedrukt, zal de body een data theme
 * van paars krijgen. Hierdoor zal het kleurenpallet veranderen.
 */
function swapToPurple() {
    document.body.setAttribute("data-theme", "purple");
}

/**
 * Function SwapToYellow
 * Wanneer er op de gele knop wordt gedrukt, zal de body een data theme
 * van geel krijgen. Hierdoor zal het kleurenpallet veranderen.
 */
function swapToYellow() {
    document.body.setAttribute("data-theme", "yellow");
}

//addeventlisteners
blue.addEventListener("click", swapToBlue);
purple.addEventListener("click", swapToPurple);
yellow.addEventListener("click", swapToYellow);