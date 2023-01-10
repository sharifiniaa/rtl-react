import {render, screen} from "@testing-library/react";
import {Greet} from "./greet";


test('checking Hello word', () => {
   render(<Greet/>)
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
})


test('check name props', () => {
    render(<Greet name='Hossein'/>)
    const textElement = screen.getByText('Hello Hossein');
    expect(textElement).toBeInTheDocument();
})