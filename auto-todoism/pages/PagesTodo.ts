import { expect, Locator, Page } from "@playwright/test"

export class TodoListPage {
    readonly page: Page


    constructor(page: Page) {
        this.page = page
    }

    async AddNewTask() {
        await this.page.getByPlaceholder('What needs to be done?').fill('hacer');
        await this.page.getByPlaceholder('What needs to be done?').press('Enter');
        await expect(this.page.getByText('hacer')).toBeVisible();
    }
}