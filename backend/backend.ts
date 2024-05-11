import { url } from "@spirobel/mininext";

const appScriptTag = url.frontend("/App.tsx");

url.set([
  [
    "/",
    (mini) => {
      return mini.html`<div id="app"></div>${appScriptTag}`;
    },
  ],
]);

export default url.install;
