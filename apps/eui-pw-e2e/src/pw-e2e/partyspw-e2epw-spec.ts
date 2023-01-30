Feature('partys');

Scenario('Test the Multiparty page', async ({ I }) => {
   I.amOnPage('/microsite/nfdiv/case-details/1669996761194595/trigger/update-parties');
   I.see("Parties to Case ID 1669-9967-6119-4595")
});
