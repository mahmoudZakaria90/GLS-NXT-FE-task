import { useEffect, useRef } from "react";

import modalCSS from "./App.module.css";

// Component is inspired from HTML5 Dialog element
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
// This one even is going to make `React.portal()` obselete.
function Modal() {
  const modalRef = useRef();
  const showButtonRef = useRef();
  const closeButtonRef = useRef();

  const modalRefCurrent = modalRef.current as HTMLDialogElement;
  const showButtonRefCurrent = showButtonRef.current as HTMLButtonElement;
  const closeButtonRefCurrent = showButtonRef.current as HTMLButtonElement;

  useEffect(() => {
    // No need to make an event delegation ;)
    showButtonRefCurrent?.addEventListener("click", () => {
      document.body.style.overflow = "hidden";
      modalRefCurrent?.showModal();
    });

    modalRefCurrent.addEventListener("click", function (event) {
      var rect = modalRefCurrent.getBoundingClientRect();
      var isInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        modalRefCurrent?.close();
      }
    });

    closeButtonRefCurrent.addEventListener("click", () => {
      document.body.style.overflow = "visible";
      modalRefCurrent?.close();
    });
  }, []);
  return (
    <section className={modalCSS.container}>
      <dialog role="dialog" ref={modalRef}>
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
