import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SideBar from ".";

describe("SideBar", () => {
	it("Show be returned true when there is text in the document", () => {
		render(<SideBar />);
		const myNotes = screen.getByText("My Notes");
		const newNote = screen.getByText("New Note");
		expect(newNote).toBeInTheDocument();
		expect(myNotes).toBeInTheDocument();
	});

	it("Shoud make shure background color is changing", () => {
		render(<SideBar />);
		const myNotes = screen.getByTestId("my-notes");
		const newNote = screen.getByTestId("new-note");
		expect(myNotes).toHaveStyle(`background-color:#2c2c2c`);
		expect(newNote).toHaveStyle(`background-color:#fff`);
		fireEvent.click(newNote);
		expect(newNote).toHaveStyle(`background-color:#2c2c2c`);
		expect(myNotes).toHaveStyle(`background-color:#fff`);
	});
});
