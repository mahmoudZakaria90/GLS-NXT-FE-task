import { useState } from "react";

import appCSS from "./App.module.css";
import Modal from "./Modal/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflowY = "hidden";
  };

  return (
    <>
      <section className={appCSS.container}>
        <button
          type="button"
          onClick={handleOpen}
          className={appCSS.showButton}
        >
          Show modal
        </button>

        <article className={appCSS.article}>
          <Modal
            isOpen={isOpen}
            modalTitle="Halo"
            modalBody="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et earum
              perferendis nisi, impedit maiores tempora assumenda aut maxime
              alias, sunt ratione sequi soluta nostrum nihil velit numquam, quam
              blanditiis cum!"
            setIsOpen={setIsOpen}
            submitCB={() => alert("Data saved!")}
          />
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
    </>
  );
}

export default App;
