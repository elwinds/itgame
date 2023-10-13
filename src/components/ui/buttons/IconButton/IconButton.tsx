import classes from "./IconButton.module.scss";

interface PlayButtonProps {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
}

const IconButton: React.FC<PlayButtonProps> = ({ className, onClick, children }) => {
  return (
    <button
      className={className ? `${className} ${classes.btn}` : classes.btn}
      onClick={(e) => (onClick ? onClick(e) : undefined)}
    >
      {children}
    </button>
  );
};

export default IconButton;
