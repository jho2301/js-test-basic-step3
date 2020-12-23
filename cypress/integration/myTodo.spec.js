before(() => {
  cy.visit("http://127.0.0.1:8080");
});

describe("TodoList E2E테스트", () => {
  it("todo list에 todoItem을 키보드로 입력후 enter키를 눌러 추가한다", () => {
    const newTodoItem = "test";
    cy.get(".new-todo").type(`${newTodoItem}{enter}`);
    cy.get(".label").eq(-1).should("text", newTodoItem);
  });
});
