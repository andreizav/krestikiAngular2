import { KrestikiAngular2Page } from './app.po';

describe('krestiki-angular2 App', function() {
  let page: KrestikiAngular2Page;

  beforeEach(() => {
    page = new KrestikiAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
