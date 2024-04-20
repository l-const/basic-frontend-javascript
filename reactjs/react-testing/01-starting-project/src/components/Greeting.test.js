const { render, screen, fireEvent } = require("@testing-library/react")
const { default: Greeting } = require("./Greeting")


describe("greetingcomponent", () => {
    
    test('hello world screen', () => {
        // Arrange
        render(<Greeting />);
        // Act
        const paragraph = screen.getByText(/Hello World/)
        // Assert
        expect(paragraph).toBeInTheDocument();
    })


    test('Test changed text default', () => {
        render(<Greeting />)
        let paragraphElWithText = screen.queryByText(/It's good to see you!/);
        // paragraphElWithText
        expect(paragraphElWithText).toBeInTheDocument()

    })


    test("Test chaned text clicked!", () => {
        render(<Greeting />)
        let paragraphElWithText = screen.queryByText(/Changed/);
        // paragraphElWithText
        expect(paragraphElWithText).toBeNull()
        const buttonEl = screen.getByText(/Change Text/)
        fireEvent.click(buttonEl);
        paragraphElWithText = screen.getByText(/Changed/);
        expect(paragraphElWithText).toBeInTheDocument(); 
    })
    
})


