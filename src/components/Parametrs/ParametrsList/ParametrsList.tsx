import { useDispatch, useSelector } from "react-redux";
import ParametrItem from "../ParametrItem/ParametrItem";
import { DEPEND_PARAMETRS_MOCK, PARAMETRS_MOCK } from "../Parametrs.mock";
import classes from "./ParametrsList.module.scss";
import { useState, useEffect } from "react";
import {
  userDependParametersSelector,
  userParametersSelector,
} from "../../../store/modules/user/selectors";
import { userActions } from "../../../store/modules/user/actions";
import { ParametersUserState } from "../../../store/modules/user/types";

interface ParametrsListProps {
  isEdit: boolean;
  setInputsValues: (inputsValues: ParametersUserState) => void;
}

const ParametrsList: React.FC<ParametrsListProps> = ({
  isEdit,
  setInputsValues,
}) => {
  const dispatch = useDispatch();
  const parametrs = useSelector(userParametersSelector);
  const depend_parametrs = useSelector(userDependParametersSelector);

  useEffect(() => {
    dispatch(userActions.initUser());
  }, [parametrs, dispatch]);

  const [parametrsInputsValues, setParametrsInputsValues] =
    useState<ParametersUserState>({
      power: parametrs.power,
      agility: parametrs.agility,
      intellect: parametrs.intellect,
      charisma: parametrs.charisma,
    });

  useEffect(() => {
    setInputsValues(parametrsInputsValues);
  }, [parametrsInputsValues, setInputsValues]);

  useEffect(() => {
    setParametrsInputsValues(parametrs);
  }, [parametrs]);

  return (
    <div className={classes.container}>
      <div className={classes.list}>
        {PARAMETRS_MOCK.map((param) => {
          return (
            <ParametrItem
              key={param.title}
              isEdit={isEdit}
              title={param.title}
              name={param.name}
              text={param.text}
              value={parametrsInputsValues[param.name]}
              setInputValues={setParametrsInputsValues}
              inputsValues={parametrsInputsValues}
            />
          );
        })}
      </div>
      <div className={`${classes.list}  ${classes["list--noedit"]}`}>
        {DEPEND_PARAMETRS_MOCK.map((param) => {
          return (
            <ParametrItem
              key={param.title}
              isEdit={false}
              title={param.title}
              text={param.text}
              value={depend_parametrs[param.name]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ParametrsList;
