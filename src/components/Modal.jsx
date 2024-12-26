import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";

const Modal = ({ children }) => {
  const navigate = useNavigate();

  function closeHandler(event) {
    navigate(".."); // same as in terminal to go back up one level, navigates to the parent route
  }

  return (
    <>
      <div className={styles.backdrop} onClick={closeHandler} />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
