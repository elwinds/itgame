import { useEffect } from "react";
import clases from "./Modal.module.scss";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  close: () => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  className,
  isOpen,
  close,
}) => {
  
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === 27) return close();
    };
    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [isOpen]);

  return (
    <div className={`${clases.container} ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default Modal;
