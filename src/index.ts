import "./config";

//import "@dojo/framework/shim/Promise";

import App from "./widgets/app";

/**
 * Initialize application
 */


console.log('Creating app');

export const app = new App({
  //appName: "SITCEN GEO Viewer - [ALPHA VERSION]",
  container: document.getElementById("app") as HTMLElement
});
