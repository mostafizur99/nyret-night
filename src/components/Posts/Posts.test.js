import { render, screen } from "@testing-library/react"
import Posts from "./Posts";

describe('Posts component', () => {
    test('renders posts if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'Post one' }]
        });
        render(<Posts />);


        const listElements = await screen.findAllByRole('listitem');
        expect(listElements).not.toHaveLength(0);
    });
});