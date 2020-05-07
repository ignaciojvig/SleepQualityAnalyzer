describe("The Home Page", () => {
  it("Succesfully loads", () => {
    cy.visit("/");
  });

  it("Trying to overflow name input with characters", () => {
    const nameInput = cy.get("input[name=inputName]");
    nameInput.type(
      "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    );
    nameInput.invoke("val").then((content) => {
      expect(content).to.have.length(30);
    });
  });

  it("Trying to submit empty form", () => {
    const nameInput = cy.get("input[name=inputName]");
    const ageInput = cy.get("input[name=inputAge]");

    nameInput.clear();
    ageInput.clear();
  });
});
