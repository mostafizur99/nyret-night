import { render, screen } from "@testing-library/react"
import Counter from "./Counter"
import user from "@testing-library/user-event"


describe('Counter', () => {
    test('render correctly', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toBeInTheDocument()

        const voteButton = screen.getByRole('button', { name: 'Vote' })
        expect(voteButton).toBeInTheDocument()

        const amountInput = screen.getByRole('spinbutton')
        expect(amountInput).toBeInTheDocument()

        const setButton = screen.getByRole('button', { name: 'Set' })
        expect(setButton).toBeInTheDocument()
    })

    test('renders a vote of 0', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('0')
    })

    test('renders a vote of 1 after clicking the vote button', async () => {
        user.setup()
        render(<Counter />)
        const voteButton = screen.getByRole('button', { name: 'Vote' })
        await user.click(voteButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1')
    })

    test('renders a vote of 2 after clicking the vote button twice', async () => {
        user.setup()
        render(<Counter />)
        const voteButton = screen.getByRole('button', { name: 'Vote' })
        await user.click(voteButton)
        await user.click(voteButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('2')
    })

    test('renders a vote of 10 after clicking the set button', async () => {
        user.setup()
        render(<Counter />)
        const amountInput = screen.getByRole('spinbutton')
        await user.type(amountInput, '10')
        expect(amountInput).toHaveValue(10)

        const setButton = screen.getByRole('button', { name: 'Set' })
        await user.click(setButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('10')
    })

    test('elements are focused in the right order', async () => {
        user.setup()
        render(<Counter />)
        const voteButton = screen.getByRole('button', { name: 'Vote' })
        const amountInput = screen.getByRole('spinbutton')
        const setButton = screen.getByRole('button', { name: 'Set' })

        await user.tab()
        expect(voteButton).toHaveFocus()
        await user.tab()
        expect(amountInput).toHaveFocus()
        await user.tab()
        expect(setButton).toHaveFocus()
    })

})