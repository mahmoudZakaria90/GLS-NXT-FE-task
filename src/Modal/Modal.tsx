import { ReactNode, useRef, forwardRef } from "react";

import modalCSS from "./Modal.module.css";

import useModal from "./useModal";

// Component is inspired from HTML5 Dialog element
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
// The html5 <dialog> element as per some docs is making `React.portal()` obselete.
// It supports `ESC` button for closing the dialog.
type ModalProps = {
  isOpen?: boolean;
  modalTitle?: string;
  modalBody?: string | ReactNode;
};
const Modal = forwardRef(
  ({ isOpen, modalTitle, modalBody }: ModalProps, showButtonRef) => {
    const modalRef = useRef<HTMLDialogElement>(null);
    const saveButtonRef = useRef<HTMLButtonElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    useModal(modalRef, showButtonRef, saveButtonRef, closeButtonRef, isOpen);

    return (
      <dialog
        data-testid="dialog"
        role="dialog"
        autoFocus
        tabIndex={1}
        ref={modalRef}
        className={modalCSS.modal}
      >
        <header tabIndex={2}>
          <h1 tabIndex={2}>{modalTitle || "Default Title"}</h1>
        </header>
        <section
          data-testid="dialog-body"
          className={modalCSS.modalBody}
          tabIndex={3}
        >
          {modalBody || "Default body"}
        </section>
        <button tabIndex={4} type="button" ref={saveButtonRef}>
          Save
        </button>
        <button tabIndex={5} type="button" ref={closeButtonRef}>
          Close
        </button>
      </dialog>
    );
  }
);

export default Modal;
