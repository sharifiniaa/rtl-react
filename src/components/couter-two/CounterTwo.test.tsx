import { render, screen } from "@testing-library/react"
import { CounterTwo } from "./CounterTwo";
import user from '@testing-library/user-event';


describe('CounterTwo', () => {
    test('renders correctly', () => {
        render(<CounterTwo count={0} />)
        const textElement = screen.getByRole('heading', {
            name: 'Counter Two'
        })
        expect(textElement).toBeInTheDocument();
    });

    test('handlers to be called', async() => {
        user.setup();
        const handleIncrement = jest.fn();
        const handleDecrement = jest.fn();
        render(<CounterTwo count={0} 
            handleDecrement={handleDecrement} 
            handleIncrement={handleIncrement} />
        );

        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        });
        const decrementButton = screen.getByRole('button', {
            name: 'Decrement'
        })

        await user.click(incrementButton);
        await user.click(decrementButton);

        expect(handleIncrement).toBeCalledTimes(1);
        expect(handleDecrement).toBeCalledTimes(1);

    })
})