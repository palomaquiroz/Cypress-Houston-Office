describe("Houston office page flow", () => {
  beforeEach("Open December Labs webpage", () => {
    Cypress.on("uncaught:exception", (err, runnable) => false);
    cy.visit("https://inhouse.decemberlabs.com/");
  });

  it("Visit December Labs webpage", () => {
    cy.title().should("contain", "December Labs");
    cy.get("#menu-header-main-menu > li").then((items) => {
      expect(items[0]).to.contain.text("Home");
      expect(items[1]).to.contain.text("About");
      expect(items[2]).to.contain.text("Services");
      expect(items[3]).to.contain.text("Our Work");
      expect(items[4]).to.contain.text("Blog");
      expect(items[5]).to.contain.text("FAQ");
      expect(items[6]).to.contain.text("Careers");
    });
  });

  it("Access Houston Office Page", () => {
    cy.get("a.city").contains("Houston").click();
    cy.title().should("contain", "Houston Web & App Developers");
    cy.url().should(
      "eq",
      "https://inhouse.decemberlabs.com/locations/houston/"
    );
  });

  it("Open 'Schedule  Free Consultation' form", () => {
    cy.get("a.city").contains("Houston").click();
    cy.get(".buttons").contains("Schedule free consultation").click();
    cy.get(".dl-schedule-consultation-modal").should("have.class", "open");
  });

  it("Close 'Schedule  Free Consultation' form", () => {
    cy.get("a.city").contains("Houston").click();
    cy.get(".buttons").contains("Schedule free consultation").click();
    cy.get(".dl-schedule-consultation-modal .btn-close-modal").click();
    cy.get(".dl-schedule-consultation-modal").not("have.class", "open");
  });
});
