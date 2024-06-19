import { useRef } from "react";

import appCSS from "./App.module.css";

import Modal from "./Modal/Modal";

// Component is inspired from HTML5 Dialog element
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
// This one even is going to make `React.portal()` obselete.
// It supports `ESC` button for closing the dialog.

const modalBody = (
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eligendi
    dicta culpa ducimus minus numquam perferendis praesentium dolor beatae
    ratione necessitatibus, libero delectus soluta earum, fuga eaque vel
    molestiae aut. Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
    deleniti reprehenderit cum. Magni nam similique consequatur ad enim
    voluptate quos quo quia nesciunt! Veritatis esse beatae quasi maiores atque
    quae! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
    eligendi dicta culpa ducimus minus numquam perferendis praesentium dolor
    beatae ratione necessitatibus, libero delectus soluta earum, fuga eaque vel
    molestiae aut. Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
    deleniti reprehenderit cum. Magni nam similique consequatur ad enim
    voluptate quos quo quia nesciunt! Veritatis esse beatae quasi maiores atque
    quae!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
    eligendi dicta culpa ducimus minus numquam perferendis praesentium dolor
    beatae ratione necessitatibus, libero delectus soluta earum, fuga eaque vel
    molestiae aut. Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
    deleniti reprehenderit cum. Magni nam similique consequatur ad enim
    voluptate quos quo quia nesciunt! Veritatis esse beatae quasi maiores atque
    quae!
  </p>
);
function App() {
  const showButtonRef = useRef<HTMLButtonElement>(null);
  return (
    <section className={appCSS.container}>
      <Modal
        ref={showButtonRef}
        modalTitle="Modal title Zak"
        modalBody={modalBody}
        isOpen
      />
      <button type="button" ref={showButtonRef} className={appCSS.showButton}>
        Show modal
      </button>

      <article className={appCSS.article}>
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

export default App;
