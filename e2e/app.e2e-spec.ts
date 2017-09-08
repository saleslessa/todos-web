import { TodosWebPage } from './app.po';

describe('todos-web App', () => {
  let page: TodosWebPage;

  beforeEach(() => {
    page = new TodosWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
