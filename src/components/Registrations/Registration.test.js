import { render, screen } from "@testing-library/react";
import Registration from "./Registration";

describe('Registration component', () => {
    test('renders Registration elements', () => {
        //Arrange
        render(<Registration />);

        //Act
        // ...nothing

        // Assert
        //h1
        const pageHeading = screen.getByRole('heading', {
            level: 1
        });
        // const pageHeading = screen.getByRole('heading', {
        //     name: "Registration Form"
        // });
        expect(pageHeading).toBeInTheDocument();

        //h2
        const sectionHeading = screen.getByRole('heading', {
            level: 2
        });
        expect(sectionHeading).toBeInTheDocument();

        //p(All fields are mandatory)
        const paragraphElement = screen.getByText('All fields are mandatory');
        expect(paragraphElement).toBeInTheDocument();

        //close element
        const closeElement = screen.getByTitle('close');
        expect(closeElement).toBeInTheDocument();

        //image element
        const imageElement = screen.getByAltText('a laptop screen');
        expect(imageElement).toBeInTheDocument();

        //custom element
        const customElement = screen.getByTestId('custom-element');
        expect(customElement).toBeInTheDocument();

        //text-input element (Fullname)
        const nameElement = screen.getByRole('textbox', {
            name: "Name"
        });
        // const nameElement = screen.getByLabelText('Name', {
        //     selector: "input"
        // });
        // const nameElement = screen.getByDisplayValue('David');
        // const nameElement = screen.getByPlaceholderText('Full Name');
        expect(nameElement).toBeInTheDocument();

        //textarea element (Overview)
        const overViewElement = screen.getByRole('textbox', {
            name: "Overview"
        });
        expect(overViewElement).toBeInTheDocument();

        //select element (select-dropdown)
        const selectElement = screen.getByRole('combobox');
        expect(selectElement).toBeInTheDocument();

        //checkbox element
        const checkboxElement = screen.getByRole('checkbox');
        expect(checkboxElement).toBeInTheDocument();

        //submit element
        const submitElement = screen.getByRole('button');
        expect(submitElement).toBeInTheDocument();
    });
})