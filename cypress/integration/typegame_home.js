describe("initial load", () => {
	before(() => {
		cy.visit("http://localhost:8000")
	})
	it("the typing input is in focus", () => {
		cy.visit("http://localhost:8000")
		expect(cy.get("#typing-input").should('have.focus'))
	})
	it("there is a word to match displayed", () => {
		cy.get("#current-word").should('be.visible')
	})
})
