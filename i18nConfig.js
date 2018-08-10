const path = require("path");

module.exports = {
  fallbackLng: "en",
  preload: ["en", "jp"],
  ns: ["about", "accordion", "home", "navigation", "projects", "resume"],
  backend: {
    loadPath: path.join(__dirname, "locales", "{{lng}}", "{{ns}}.json"),
    addPath: path.join(__dirname, "locales", "{{lng}}", "{{ns}}.missing.json")
  }
};
