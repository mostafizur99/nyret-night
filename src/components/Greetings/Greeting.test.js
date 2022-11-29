import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting"

describe('Greeting component', () => {
    test('renders "Welcome to Nyret Night!" as a text', () => {
        //Arrange
        render(<Greeting />);

        //Act
        // ...nothing

        // Assert
        const greetingElement = screen.getByText('Welcome to Nyret Night!');
        expect(greetingElement).toBeInTheDocument();
    });

    test('renders "Join and Get Coding Idea" if the button was Not clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        // ...nothing

        // Assert
        const joinText = screen.getByText('Join and Get Coding Idea', { exact: false });
        expect(joinText).toBeInTheDocument();
    });

    test('renders "You Are Coder Member" if the button was clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        // Assert
        const memberText = screen.getByText('You Are Coder Member', { exact: false });
        expect(memberText).toBeInTheDocument();
    });

    test('does not render "Join and Get Coding Idea" if the button was clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        // Assert
        const joinText = screen.queryByText('Join and Get Coding Idea', { exact: false });
        expect(joinText).toBeNull();
    });

});

