import { SeedClientPage } from './app.po';

describe('seed-client App', function() {
  let page: SeedClientPage;

  beforeEach(() => {
    page = new SeedClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
