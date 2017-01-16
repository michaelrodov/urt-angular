import { UrtAngularPage } from './app.po';

describe('urt-angular App', function() {
  let page: UrtAngularPage;

  beforeEach(() => {
    page = new UrtAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
