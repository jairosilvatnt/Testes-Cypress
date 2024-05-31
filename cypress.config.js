const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://bugbank.netlify.app',
    testIsolation: false,

    // setupNodeEvents( on, config) {
    //   // 
    // },
  },
});

