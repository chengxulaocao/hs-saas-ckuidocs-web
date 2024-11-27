// .vitepress/theme/index.js

import DefaultTheme from "vitepress/theme";
import "element-plus/dist/index.css";
import CaoKunTsvue3UI from 'caokun-tsvue3-ui';
import "../../../node_modules/caokun-tsvue3-ui/lib/style.css";
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    import("element-plus").then((module) => {
      app.use(module).use(CaoKunTsvue3UI);
    });
  },
};
