import { Selector } from 'testcafe';

class ListstuffPage {
  constructor() {
    this.pageId = '#liststuff-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.wait(10000).expect(this.pageSelector.exists).ok();
  }

  async hasTable(testController) {
    const tableRowCount = Selector('.row').count;
    await testController.expect(tableRowCount).gte(1);
  }
}

export const listStuffPage = new ListstuffPage();
