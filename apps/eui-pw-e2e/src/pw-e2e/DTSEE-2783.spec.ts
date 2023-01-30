
import { test, expect } from '@playwright/test';
import * as path from "path";
test.describe ("Testing the Multi Party page -- using a Page Object or App Actions Object",  () => {
  test( 'It should load the parties page', async ({page}) => {


  const baseUrl = process.env.baseUrl
  //const partyPromise = page.waitForRequest('/microsite/nfdiv/api/party*');
  // test('The Header should be visible ', async({page}) => {
  //   await expect(page.locator('css=govuk-header__logotype-text')).toBeVisible();
  // })
  await page.goto(`/microsite/nfdiv/case-details/1669996761194595/trigger/update-parties`)
   //await expect(page.locator('css=govuk-header__logotype-text')).toBeVisible();
    await expect (page.getByRole('heading', { name: 'Parties to Case ID 1669-9967-6119-4595' })).toBeVisible();

  await page.route('/microsite/nfdiv/api/party*', (route, request) => {
    request.resourceType() == 'application/json'
    return route.fulfill({
      status: 200,
      contentType: 'application/json',
      path: path.resolve(__dirname, '../fixtures/getParties.json')
    })
  } )


  await page.goto('http://localhost:4200/microsite/nfdiv/case-details/1669996761194595/trigger/update-parties');
  await page.getByRole('heading', { name: 'Parties to Case ID 1669-9967-6119-4595' }).click();
  await page.locator('[data-test="add-button"]').click();
  await page.getByLabel('First name').click();
  await page.getByLabel('First name').fill('Stephen');
  await page.getByLabel('First name').press('Tab');
  await page.getByLabel('Last name').fill('Buckley');
  await page.locator('[data-test="add-party-submit"]').click();
  });
  // it("The case id should match the URL id using page Object", () => {
  //   po.getCaseId("Parties to Case ID 1669-9967-6119-4595");
  // });
  //
  // it("The parties list should contain six items", () => {
  //   cy.wait("@parties");
  //   po.checkListLength(6);
  // });
  //
  // it("It should carry out a case insensitive filter", () => {
  //   po.setSearchFilter("fred");
  //   po.checkListLength(3);
  // });
  //
  // it("It should carry out a case sensitive filter", () => {
  //   po.setSearchFilter("fred");
  //   po.checkListLength(3);
  //   po.caseSensitiveToggleOn();
  //   po.checkListLength(1);
  // });
  //
  // it("should clear the filter", () => {
  //   po.setSearchFilter("fred");
  //   po.checkListLength(3);
  //   po.caseSensitiveToggleOn();
  //   po.checkListLength(1);
  //   po.clearSearchFilter();
  //   po.checkListLength(6);
  // });
  //
  // it("should edit a user", () => {
  //   cy.wait("@parties");
  //   po.checkListLength(6);
  //   po.selectListItem(6);
  //   po.clickEditButton();
  //   po.fillFirstNameField("Edmund");
  //   po.fillLastNameField("Sigfredson");
  //   po.clickEditPartySubmitButton();
  //   cy.wait("@partiesPatch");
  //   po.checkListLength(6);
  //   po.checkListItemContains(6,"Sigfredson")
  // });
  // it("should add a user", () => {
  //   cy.wait("@parties");
  //   po.checkListLength(6);
  //   po.clickAddButton()
  //   po.fillFirstNameField("Edmund");
  //   po.fillLastNameField("Amunsen");
  //   po.clickAddPartySubmitButton();
  //   cy.wait("@partiesAddOne");
  //   po.checkListLength(7);
  // });
  //
  // it("should delete a user", () => {
  //   cy.wait("@parties");
  //   po.checkListLength(6);
  //   po.selectListItem(6);
  //   po.clickDeleteButton()
  //   cy.wait("@partiesDelete");
  //   po.checkListLength(5);
  // });
});
