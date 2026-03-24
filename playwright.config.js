const { defineConfig, devices } = require ("playwright/test");

module.exports = defineConfig({
    testDir: "./tests",
    timeout: 40 * 1000,
    expect: {
        timeout:7000
    },
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: "html",

    use: {
        baseUrl: "https://opensource-demo.orangehrmlive.com",
        trace: "retain-on-failure",
        screenshot: "only-on-failure",
        headless: true
    },
    projects: [{
        name: "chromium",
        use: { ...devices["Desktop Chrome"] }
    }]
})