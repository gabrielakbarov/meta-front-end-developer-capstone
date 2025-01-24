import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';

import BookingForm from "../src/Components/BookingForm/BookingForm";

describe("Booking Form", () => {
    test("Renders the BookingForm heading", () => {
        render(<BookingForm availableTimes={["17:00", "18:00"]} dispatch={jest.fn()}/>);
        const headingElement = screen.getByText("BookingForm");
        expect(headingElement).toBeInTheDocument();
    });
});
