import { AppManager } from "./appManager.js";

window.addEventListener('load', init, false);

function init() {
    var appContainer = document.getElementById('appContainer');
    var appManager = new AppManager();
}