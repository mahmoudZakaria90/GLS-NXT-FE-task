import { renderHook } from "@testing-library/react-hooks";
import { vi, expect, beforeAll, test } from "vitest";
import useModal from "./useModal";

beforeAll(() => {
  // Mock the showModal and close methods on HTMLDialogElement prototype
  HTMLDialogElement.prototype.showModal = vi.fn();
  HTMLDialogElement.prototype.close = vi.fn();
});

test("should handle modal open and close on button clicks", () => {
  const modalRef = { current: document.createElement("dialog") };
  const showButtonRef = { current: document.createElement("button") };
  const saveButtonRef = { current: document.createElement("button") };
  const closeButtonRef = { current: document.createElement("button") };

  renderHook(() =>
    useModal(modalRef, showButtonRef, saveButtonRef, closeButtonRef, false)
  );

  // Initially the modal should be closed
  expect(HTMLDialogElement.prototype.close).toHaveBeenCalled();

  // Simulate the show button click
  showButtonRef.current.click();
  expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
  expect(document.body.style.overflow).toBe("hidden");

  // Simulate the save button click
  window.alert = vi.fn(); // Mock alert to avoid the actual alert popup during test
  saveButtonRef.current.click();
  expect(window.alert).toHaveBeenCalledWith("Data Saved!");
  expect(HTMLDialogElement.prototype.close).toHaveBeenCalled();
  expect(document.body.style.overflow).toBe("visible");

  // Simulate the close button click
  closeButtonRef.current.click();
  expect(HTMLDialogElement.prototype.close).toHaveBeenCalledTimes(3); // Once from save and once from close
  expect(document.body.style.overflow).toBe("visible");
});

test("should handle modal open on isOpen prop", () => {
  const modalRef = { current: document.createElement("dialog") };
  const showButtonRef = { current: document.createElement("button") };
  const saveButtonRef = { current: document.createElement("button") };
  const closeButtonRef = { current: document.createElement("button") };

  renderHook(() =>
    useModal(modalRef, showButtonRef, saveButtonRef, closeButtonRef, true)
  );

  // Initially the modal should be open
  expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
  expect(document.body.style.overflow).toBe("hidden");
});

test("should close modal when clicking outside", () => {
  const modalRef = { current: document.createElement("dialog") };
  const showButtonRef = { current: document.createElement("button") };
  const saveButtonRef = { current: document.createElement("button") };
  const closeButtonRef = { current: document.createElement("button") };

  renderHook(() =>
    useModal(modalRef, showButtonRef, saveButtonRef, closeButtonRef, true)
  );

  // Simulate click outside the modal
  const clickEvent = new MouseEvent("click", {
    clientX: modalRef.current.getBoundingClientRect().left - 10,
    clientY: modalRef.current.getBoundingClientRect().top - 10,
  });
  modalRef.current.dispatchEvent(clickEvent);

  expect(HTMLDialogElement.prototype.close).toHaveBeenCalled();
});
