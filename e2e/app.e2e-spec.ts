import { TestImgSitePage } from './app.po';

describe('test-img-site App', () => {
  let page: TestImgSitePage;

  beforeEach(() => {
    page = new TestImgSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
