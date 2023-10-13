import Input from "../../ui/input/Input";
import classes from "./ParametrItem.module.scss";
import { ParametersUserState } from "../../../store/modules/user/types";

interface ParametrItemProps {
  title: string;
  name?: string;
  text: string;
  value: number;
  isEdit: boolean;
  setInputValues?: (newValues: ParametersUserState) => void;
  inputsValues?: ParametersUserState;
}

const ParametrItem: React.FC<ParametrItemProps> = ({
  title,
  name,
  text,
  value,
  isEdit,
  setInputValues,
  inputsValues,
}) => {
  const handleInputChange = (newValue: number) => {
    if (name && setInputValues && inputsValues) {
      setInputValues({
        ...inputsValues,
        [name]: newValue,
      });
    }
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.number}>{value}</h2>
      <h3 className={classes.title}>{`${title} ${value}`}</h3>
      {isEdit ? (
        <Input
          type="number"
          min={0}
          max={99}
          placeholder="Введите число"
          value={value}
          onChange={handleInputChange}
        />
      ) : (
        <p className={classes.text}> {text}</p>
      )}
    </div>
  );
};

export default ParametrItem;
