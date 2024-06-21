import { createPortal } from "react-dom";

const Portal = ({ children, wrapper }) =>
  createPortal(children, document.querySelector(`#${wrapper}`));

export default Portal;
