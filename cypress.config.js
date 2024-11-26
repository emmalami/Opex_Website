const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        // Setting up node event listeners (you can add your custom logic here)
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },

        // Global timeout settings
        defaultCommandTimeout: 10000, // Wait up to 10 seconds for most commands like cy.get(), cy.xpath()
        pageLoadTimeout: 30000,       // Wait up to 30 seconds for pages to fully load
        requestTimeout: 15000,        // Wait up to 15 seconds for API requests
        responseTimeout: 15000,      // Wait up to 15 seconds for a network response
          "reporter": "mochawesome",
          "reporterOptions":{
            "charts":true,
            "overwrite":false,
            "html": false,
            "json":true,
            "reportDir":"cypress/report/mochawesome-report"
          },

    },
    
});
