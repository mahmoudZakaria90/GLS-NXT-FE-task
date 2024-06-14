import { describe, it, expect, beforeAll, vi } from "vitest";

import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

beforeAll(() => {
  // Mock the showModal and close methods on HTMLDialogElement prototype
  HTMLDialogElement.prototype.showModal = vi.fn();
  HTMLDialogElement.prototype.close = vi.fn();
});

describe("App", () => {
  it("renders the Modal component when click on show modal button", async () => {
    render(<App />);
    expect(screen.getByText("Show modal")).toBeInTheDocument();

    const showModalBtn = screen.getByText("Show modal");

    await userEvent.click(showModalBtn);

    expect(screen.getByTestId("dialog")).toBeInTheDocument();
    expect(screen.getByText("Modal title")).toBeInTheDocument();
    expect(screen.getByTestId("dialog-body")).toBeInTheDocument();
    expect(screen.getByText("Save")).toBeInTheDocument();
    expect(screen.getByText("Close")).toBeInTheDocument();
  });
  it("Closes the Modal component when click on close modal button", async () => {
    render(<App />);

    const showModalBtn = screen.getByText("Show modal");

    await userEvent.click(showModalBtn);
    await userEvent.click(screen.getByText("Close"));

    waitFor(() => {
      expect(screen.getByTestId("dialog")).not.toBeInTheDocument();
    });
  });
});
