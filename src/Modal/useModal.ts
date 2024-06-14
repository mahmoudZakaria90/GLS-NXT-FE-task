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

    const handleSave = () => {
      // Do Something
      alert("Data Saved!");
      handleClose();
    };

    const handleClose = () => {
      modal.close();
      document.body.style.overflow = "visible";
    };

    const handleCloseOutside = (event) => {
      const rect = modal.getBoundingClientRect();
      const isInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        modal.close();
      }
    };

    if (isOpen) {
      handleShow();
    } else {
      handleClose();
    }

    if (showButton && modalRef) {
      showButton.addEventListener("click", handleShow);
    }
    if (saveButton && modal) {
      saveButton.addEventListener("click", handleSave);
    }

    if (closeButton && modal) {
      closeButton.addEventListener("click", handleClose);
    }
    modal.addEventListener("click", handleCloseOutside);
    return () => {
      showButton.removeEventListener("click", handleShow);
      saveButton.removeEventListener("click", handleSave);
      closeButton.removeEventListener("click", handleClose);
      modal.removeEventListener("click", handleCloseOutside);
    };
  });
};

export default useModal;
