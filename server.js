const express = require("express");
const next = require("next");

const i18nextMiddleware = require("i18next-express-middleware");
const i18nextBackend = require("i18next-node-fs-backend");
const path = require("path");

const i18n = require("./i18n");
const i18nConfig = require("./i18nConfig");
// const routes = require("./server/routes");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

i18n
  .use(i18nextBackend)
  .use(i18nextMiddleware.LanguageDetector)
  .init(i18nConfig, () => {
    app
      .prepare()
      .then(() => {
        const server = express();

        server.use(i18nextMiddleware.handle(i18n));
        server.use("/locales", express.static(path.join(__dirname, "locales")));
        server.post(
          "/locales/add/:lng/:ns",
          i18nextMiddleware.missingKeyHandler(i18n)
        );

        server.get("*", (req, res) => {
          return handle(req, res);
        });

        // server.use(routes);

        server.listen(3000, err => {
          if (err) throw err;
        });
      })
      .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
      });
  });
