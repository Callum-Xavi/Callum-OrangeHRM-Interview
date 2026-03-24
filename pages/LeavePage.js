class LeavePage {
    /**
     * @ param {import("@playwright/test").Page} page
     */

    constructor(page) {
        this.page = page
        
        // we should probably use locators the user can see
        this.leaveMenuLinkRole = page.getByRole("link", { name: "leave" })
        this.dateFromInput = page.locator(".oxd-date-input input").first()
        this.dateToInput = page.locator(".oxd-date-input input").nth(1)

        this.removeLeaveType = page.locator(".oxd-chip", { hasText: "Pending Approval" }).locator(".bi-x.--clear")
        this.scopeShowLeaveWithStatus = page.locator(".oxd-input-group").filter({ hasText: "Show Leave with Status"}).locator(".oxd-select-text")
        this.listboxScheduledItem = page.getByRole("listbox").getByText("Scheduled")

        this.searchButton = page.getByRole("button", { name: "Search", exact: true })

        this.resultsTable = page.locator("oxd-table");
    }

    async navigatingToLeaveList() {
        await this.leaveMenuLinkRole.click()
        await this.page.waitForURL("**/leave/viewLeaveList")
    }

    async searchLeave(fromDate, toDate) {
        await this.dateFromInput.fill(fromDate)
        await this.page.keyboard.press("Escape")


        await this.dateToInput.fill(toDate)
        await this.page.keyboard.press("Escape")

        await this.removeLeaveType.click()
        await this.scopeShowLeaveWithStatus.click()
        await this.listboxScheduledItem.click()

        // Execute
        await this.searchButton.click()


    }
}

module.exports = {LeavePage}