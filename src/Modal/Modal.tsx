import {
  useState,
  useEffect,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";
import Portal from "../Portal";
import { addDelay } from "../utils";

import modalCSS from "./Modal.module.css";

type ModalProps = {
  isOpen?: boolean;
  modalBody?: ReactNode | string;
  modalTitle?: ReactNode | string;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  submitCB?: () => void;
};

const Modal = ({
  isOpen,
  modalBody,
  modalTitle,
  setIsOpen,
  submitCB,
}: ModalProps) => {
  const [fadingOut, setFadingOut] = useState(false);

  const handleDelayedClose = () => {
    setIsOpen(false);
    setFadingOut(false);
    document.body.style.overflowY = "visible";
  };

  const handleClose = () => {
    setFadingOut(true);
    addDelay(handleDelayedClose, 500);
  };

  const handleCloseOnKeyDown = (e) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleCloseOnKeyDown);
    }
    return () => document.removeEventListener("keydown", handleCloseOnKeyDown);
  });

  const fadeOutClassName = fadingOut ? modalCSS.modalFadingOut : null;

  return (
    isOpen && (
      <Portal
        children={
          <div
            className={`${modalCSS.modal} ${fadeOutClassName}`}
            onClick={handleClose}
          >
            <div
              className={modalCSS.modalWrapper}
              onClick={(e) => e.stopPropagation()}
            >
              <h1>{modalTitle}</h1>
              <p>{modalBody}</p>
              <button
                type="button"
                onClick={() => {
                  submitCB();
                  handleClose();
                }}
              >
                Submit
              </button>
              <button type="button" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        }
        wrapper="modal"
      />
    )
  );
};

export default Modal;
