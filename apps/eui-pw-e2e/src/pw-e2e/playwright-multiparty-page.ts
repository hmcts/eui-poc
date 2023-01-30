import { Locator, Page } from "@playwright/test";

export class PlaywrightMultipartyPage  {
  readonly page: Page;
  readonly caseIdElement:Locator

  constructor(page: Page) {
    this.page = page;
    this.caseIdElement = this.page.getByTestId('case-id')
  }


  // getCaseId(testValue: string) {
  //   return expect(this.caseIdElement).toContainText(testValue)
  // }

}