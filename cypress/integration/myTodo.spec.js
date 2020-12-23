before(() => {
  cy.visit("http://127.0.0.1:8080");
});

describe("TodoList E2E테스트", () => {
  it("todo list에 todoItem을 키보드로 입력후 enter키를 눌러 추가한다", () => {
    const newTodoItem = "test";
    cy.get(".new-todo").type(`${newTodoItem}{enter}`);
    cy.get(".label").eq(-1).should("text", newTodoItem);
  });

  // (li tag 에 completed class 추가, input 태그에 checked 속성 추가)
  it("todo list의 체크박스를 클릭하여 complete 상태로 변경한다", () => {
    cy.get("#todo-list li .toggle").eq(-1).click();
    cy.get("#todo-list li").eq(-1).should("have.class", "completed");
    // cy.get("#todo-list li .toggle").eq(-1).should("have.attr", "checked");
  });
});
