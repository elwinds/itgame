import { useState } from "react";
import IconButton from "../ui/buttons/IconButton/IconButton";
import EditIcon from "../ui/icons/Edit";
import classes from "./Parametrs.module.scss";
import CheckIcon from "../ui/icons/Check";
import ParametrsList from "./ParametrsList/ParametrsList";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/modules/user/actions";
import { ParametersUserState } from "../../store/modules/user/types";

const Parametrs = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [inputsValues, setInputsValues] = useState<ParametersUserState>({
    power: 0,
    agility: 0,
    intellect: 0,
    charisma: 0,
  });

  const dispatch = useDispatch();

  const handleParametrsChange = (inputsValues: ParametersUserState) => {
    dispatch(userActions.changeParameters(inputsValues));
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>ПАРАМЕТРЫ</h2>
        <IconButton
          onClick={() => {
            setIsEdit(!isEdit);
            isEdit && handleParametrsChange(inputsValues);
          }}
        >
          {isEdit ? (
            <CheckIcon className={classes.header__icon} />
          ) : (
            <EditIcon className={classes.header__icon} />
          )}
        </IconButton>
      </div>
      <ParametrsList isEdit={isEdit} setInputsValues={setInputsValues} />
    </div>
  );
};

export default Parametrs;
