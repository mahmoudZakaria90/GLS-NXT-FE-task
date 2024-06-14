import { useEffect, useRef } from "react";

import modalCSS from "./App.module.css";

// Component is inspired from HTML5 Dialog element
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
// This one even is going to make `React.portal()` obselete.
function Modal() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const showButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // No need to make an event delegation ;)
    const modal = modalRef.current;
    const showButton = showButtonRef.current;
    const closeButton = closeButtonRef.current;

    if (showButton && modal) {
      showButton.addEventListener("click", () => {
        modal.showModal();
        document.body.style.overflow = "hidden";
      });
    }

    if (closeButton && modal) {
      closeButton.addEventListener("click", () => {
        modal.close();
        document.body.style.overflow = "visible";
      });
    }
  }, []);
  return (
    <section className={modalCSS.container}>
      <dialog role="dialog" ref={modalRef} className={modalCSS.modal}>
        <p tabIndex={0}>This modal dialog has a groovy backdrop!</p>
        <button type="button" ref={closeButtonRef}>
          Close
        </button>
      </dialog>

      <button type="button" ref={showButtonRef} className={modalCSS.showButton}>
        Show the dialog
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
        consequatur repellat? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Doloremque, repellendus tempore cupiditate possimus magnam
        pariatur consequuntur amet ipsum ab repudiandae veniam fugit quidem
        temporibus qui iure est nulla consequatur repellat? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Doloremque, repellendus tempore
        cupiditate possimus magnam pariatur consequuntur amet ipsum ab
        repudiandae veniam fugit quidem temporibus qui iure est nulla
        consequatur repellat? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Doloremque, repellendus tempore cupiditate possimus magnam
        pariatur consequuntur amet ipsum ab repudiandae veniam fugit quidem
        temporibus qui iure est nulla consequatur repellat? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Doloremque, repellendus tempore
        cupiditate possimus magnam pariatur consequuntur amet ipsum ab
        repudiandae veniam fugit quidem temporibus qui iure est nulla
        consequatur repellat?
      </article>
    </section>
  );
}

export default Modal;
