import classes from './Button.module.scss'

interface ButtonProps {
  className?: string;
  children: string;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}


const Button: React.FC<ButtonProps> = ({disabled = false, className, onClick, children}) => {
  return (
    <button
      disabled={disabled}
      className={`${classes.button} ${className ? className : ""}`}
      onClick={(e) => onClick(e)}
    >
      {children}
    </button>
  );
};
 
export default Button;