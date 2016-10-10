import { HshopPage } from './app.po';

describe('hshop App', function() {
  let page: HshopPage;

  beforeEach(() => {
    page = new HshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
