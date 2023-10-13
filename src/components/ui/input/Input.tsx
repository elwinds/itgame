import classes from "./Input.module.scss";

interface InputProps {
  type?: string;
  placeholder?: string;
  max?: number;
  min?: number;
  className?: string;
  onChange?: (value: any) => void;
  value?: string | number;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  max,
  min,
  className,
  onChange,
  value,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    onChange && onChange(inputValue);
  };

  return (
    <div className={classes.container}>
      <input
        onChange={handleInputChange}
        type={type}
        max={max}
        min={min}
        placeholder={placeholder}
        className={className ? `${classes.input} ${className}` : classes.input}
        value={value}
        onInput={
          type === "number"
            ? (e: any) =>
                // (e.target.value = Math.max(0, parseInt(e.target.value))
                //   .toString()
                //   .slice(0, 2)) : undefined
                (e.target.value = e.target.value > 10 ? 10 : e.target.value)
            : undefined
        }
      />
    </div>
  );
};

export default Input;
