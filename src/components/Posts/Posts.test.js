import { render, screen } from "@testing-library/react"
import Posts from "./Posts";

describe('Posts component', () => {
    test('renders posts if request succeeds', async () => {
        //Arrange
        render(<Posts />);

        //Act
        // ...nothing

        // Assert
        const listElements = await screen.findAllByRole('listitem');
        expect(listElements).not.toHaveLength(0);
    });
});