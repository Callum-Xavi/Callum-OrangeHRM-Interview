const { test, expect } = require("@playwright/test")
const { LoginPage } = require("../pages/LoginPage")
const { LeavePage } = require("../pages/LeavePage")

test.describe("Leave Management", () => {
    // searching for schedule leave
    test("Alice can search for scheduled leave", async ({ page }) => {
        const loginPage = new LoginPage(page)
        const leavePage = new LeavePage(page)

        // on the fly date creation
        const todayString = new Date().toISOString().split("T")[0]
        const futureDate = new Date();
        futureDate.setMonth(futureDate.getMonth() + 9)
        const nineMonthString = futureDate.toISOString().split("T")[0]


        await loginPage.navigate()
        await loginPage.login("Admin", "admin123")

        await leavePage.navigatingToLeaveList()

        await leavePage.searchLeave(todayString, nineMonthString)

        await expect(leavePage.resultsTable).toBeVisible()
    })
})