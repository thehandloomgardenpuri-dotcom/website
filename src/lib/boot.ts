export const INTRO_STORAGE_KEY = "hg-intro-seen";

/** Runs inline in <head> before first paint: repeat visitors in the same session skip the preloader. */
export const BOOT_SCRIPT = `(function(){try{if(sessionStorage.getItem("${INTRO_STORAGE_KEY}")){document.documentElement.classList.add("pre-skip","pre-done")}}catch(e){}})();`;
