import { render, screen } from "@testing-library/react"
import { Application } from "./application"


describe("Application", () => {
    test('renders correctly', () => {
        render(<Application/>);

        const pageHeading = screen.getByRole('heading', {
            level: 1
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole('heading',{
            level: 2
        });
        expect(sectionHeading).toBeInTheDocument();

        const paragraphElement = screen.getByText('All fields are mandatory');
        expect(paragraphElement).toBeInTheDocument();

        const inputElement = screen.getByDisplayValue('Jack');
        expect(inputElement).toBeInTheDocument();

        const nameElement = screen.getByRole('textbox', {
            name: "Name"
        });
        expect(nameElement).toBeInTheDocument();

        // just for testing getByLabelText
        const nameElement2 = screen.getByLabelText('Name');
        expect(nameElement2).toBeInTheDocument();
        // 

        const bioElement = screen.getByRole('textbox', {
            name: "Bio"
        });
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();

        const submitButtonElement = screen.getByRole('button');
        expect(submitButtonElement).toBeInTheDocument();
    })
})