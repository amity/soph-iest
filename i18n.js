const i18n = require("i18next");
const XHR = require("i18next-xhr-backend");
const LanguageDetector = require("i18next-browser-languagedetector");

const options = {
  fallbackLng: "en",
  load: "languageOnly",

  ns: ["common"],
  defaultNS: "common",

  debug: process.env.NODE_ENV !== "production" && false,
  saveMissing: true,

  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
    format: (value, format) => {
      if (format === "uppercase") {
        return value.toUpperCase();
      }
      return value;
    }
  }
};

if (process.browser) {
  i18n.use(XHR).use(LanguageDetector);
}

if (!i18n.isInitialized) {
  i18n.init(options);
}

i18n.getInitialProps = (req, namespaces) => {
  if (!namespaces) {
    namespaces = i18n.options.defaultNS;
  }
  if (typeof namespaces === "string") {
    namespaces = [namespaces];
  }

  req.i18n.toJSON = () => null;

  const initialI18nStore = {};
  req.i18n.languages.forEach(lan => {
    initialI18nStore[lan] = {};
    namespaces.forEach(ns => {
      initialI18nStore[lan][ns] = req.i18n.services.resourceStore.data[lan]
        ? req.i18n.services.resourceStore.data[lan][ns] || {}
        : {};
    });
  });
  return {
    i18n: req.i18n,
    initialI18nStore,
    initialLanguage: req.i18n.language
  };
};

module.exports = i18n;
