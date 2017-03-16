import { GaragePage } from './app.po';

describe('garage App', () => {
  let page: GaragePage;

  beforeEach(() => {
    page = new GaragePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
