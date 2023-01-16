import { render, screen } from "@testing-library/react"
import { Users } from "./Users"


describe('Users', () => {
    test('renders correctly', () => {
        render(<Users />)
        const textElement = screen.getByRole('heading', {
            name: 'Users'
        })
        expect(textElement).toBeInTheDocument()
    });

    test('renders a list of users' , async() => {
        render(<Users />);
        const listElements = await screen.findAllByRole('listitem');
        expect(listElements).toHaveLength(3)

    })
})