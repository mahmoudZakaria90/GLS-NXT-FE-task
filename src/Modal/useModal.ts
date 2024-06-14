import { useEffect } from "react";

const useModal = (
  modalRef,
  showButtonRef,
  saveButtonRef,
  closeButtonRef,
  isOpen
) => {
  useEffect(() => {
    const modal = modalRef.current;
    const showButton = showButtonRef.current;
    const saveButton = saveButtonRef.current;
    const closeButton = closeButtonRef.current;

    const handleShow = () => {
      modal.showModal();
      document.body.style.overflow = "hidden";
    };

    if (isOpen) {
      handleShow();
    }

    const handleSave = () => {
      // Do Something
      alert("Data Saved!");
      handleClose();
    };

    const handleClose = () => {
      modal.close();
      document.body.style.overflow = "visible";
    };

    if (showButton && modalRef) {
      showButton.addEventListener("click", handleShow);
    }
    if (saveButton && modal) {
      saveButton.addEventListener("click", handleSave);
    }

    if (closeButton && modal) {
      closeButton.addEventListener("click", handleClose);
    }
    return () => {
      showButton.removeEventListener("click", handleShow);
      saveButton.removeEventListener("click", handleSave);
      closeButton.removeEventListener("click", handleClose);
    };
  });
};

export default useModal;
