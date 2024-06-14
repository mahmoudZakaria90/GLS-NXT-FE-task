import { useEffect, useRef } from "react";

import modalCSS from "./App.module.css";

// Component is inspired from HTML5 Dialog element
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
// This one even is going to make `React.portal()` obselete.
// It supports `ESC` button for closing the dialog.
function Modal() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const showButtonRef = useRef<HTMLButtonElement>(null);
  const saveButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // No need to make an event delegation ;)
    const modal = modalRef.current;
    const showButton = showButtonRef.current;
    const saveButton = saveButtonRef.current;
    const closeButton = closeButtonRef.current;

    const handleClose = () => {
      modal.close();
      document.body.style.overflow = "visible";
    };

    if (showButton && modal) {
      showButton.addEventListener("click", () => {
        modal.showModal();
        document.body.style.overflow = "hidden";
      });
    }

    if (saveButton && modal) {
      saveButton.addEventListener("click", () => {
        // Do Something
        alert("Data Saved!");
        handleClose();
      });
    }

    if (closeButton && modal) {
      closeButton.addEventListener("click", handleClose);
    }
  }, []);
  return (
    <>
      <section className={modalCSS.container}>
        <button
          type="button"
          ref={showButtonRef}
          className={modalCSS.showButton}
        >
          Show modal
        </button>

        <article className={modalCSS.article}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          repellendus tempore cupiditate possimus magnam pariatur consequuntur
          amet ipsum ab repudiandae veniam fugit quidem temporibus qui iure est
          nulla consequatur repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Doloremque, repellendus tempore cupiditate possimus
          magnam pariatur consequuntur amet ipsum ab repudiandae veniam fugit
          quidem temporibus qui iure est nulla consequatur repellat? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Doloremque, repellendus
          tempore cupiditate possimus magnam pariatur consequuntur amet ipsum ab
          repudiandae veniam fugit quidem temporibus qui iure est nulla
          consequatur repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Doloremque, repellendus tempore cupiditate possimus
          magnam pariatur consequuntur amet ipsum ab repudiandae veniam fugit
          quidem temporibus qui iure est nulla consequatur repellat? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Doloremque, repellendus
          tempore cupiditate possimus magnam pariatur consequuntur amet ipsum ab
          repudiandae veniam fugit quidem temporibus qui iure est nulla
          consequatur repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Doloremque, repellendus tempore cupiditate possimus
          magnam pariatur consequuntur amet ipsum ab repudiandae veniam fugit
          quidem temporibus qui iure est nulla consequatur repellat? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Doloremque, repellendus
          tempore cupiditate possimus magnam pariatur consequuntur amet ipsum ab
          repudiandae veniam fugit quidem temporibus qui iure est nulla
          consequatur repellat?
        </article>
      </section>
      <dialog
        role="dialog"
        autoFocus
        tabIndex={1}
        ref={modalRef}
        className={modalCSS.modal}
      >
        <header>
          <h1 tabIndex={2}>Modal title</h1>
        </header>
        <section className={modalCSS.modalBody} tabIndex={3}>
          This modal dialog has a groovy backdrop!This modal dialog has a groovy
          backdrop!This modal dialog has a groovy backdrop!This modal dialog has
          a groovy backdrop! This modal dialog has a groovy backdrop!This modal
          dialog has a groovy backdrop!This modal dialog has a groovy
          backdrop!This modal dialog has a groovy backdrop! This modal dialog
          has a groovy backdrop!This modal dialog has a groovy backdrop!This
          modal dialog has a groovy backdrop!This modal dialog has a groovy
          backdrop! This modal dialog has a groovy backdrop!This modal dialog
          has a groovy backdrop!This modal dialog has a groovy backdrop!This
          modal dialog has a groovy backdrop!
        </section>
        <button type="button" ref={saveButtonRef}>
          Save
        </button>
        <button type="button" ref={closeButtonRef}>
          Close
        </button>
      </dialog>
    </>
  );
}

export default Modal;
