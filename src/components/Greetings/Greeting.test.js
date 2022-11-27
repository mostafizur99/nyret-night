import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

test('render Welcome to Nyret Night! as a text', () => {
    //Arrange
    render(<Greeting />);

    //Act
    // ...nothing

    // Assert
    const greetingElement = screen.getByText('Welcome to Nyret Night!');
    expect(greetingElement).toBeInTheDocument();
})