const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/results/cucumber-json",
  reportPath: "cypress/results/cucumber-html",
  metadata: {
    browser: {
      name: "chrome",
      version: "117.0.5938.149",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Oct 06th 2023, 05:30 AM EST" },
      { label: "Execution End Time", value: "Oct 06th 2023, 05:45 AM EST" },
    ],
  },
});