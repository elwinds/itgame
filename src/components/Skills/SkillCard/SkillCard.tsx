import { useSelector } from "react-redux";
import IconButton from "../../ui/buttons/IconButton/IconButton";
import StarIcon from "../../ui/icons/Skill";
import UpIcon from "../../ui/icons/Up";
import classes from "./SkillCard.module.scss";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { userActions } from "../../../store/modules/user/actions";
import { RootState } from "../../../store/rootReducer";
import {
  userParameterByNameSelector,
  userSkillByNameSelector,
} from "../../../store/modules/user/selectors";
import { SkillsKeys } from "../../../store/modules/user/types";

type TSkillCardProps = {
  skill: {
    title: string;
    name: SkillsKeys;
    text: string;
    icon: string;
  };
};

const SkillCard: React.FC<TSkillCardProps> = ({ skill }) => {
  const [error, setError] = useState(false);

  const skillState = useSelector((state: RootState) => {
    return userSkillByNameSelector(state, skill.name);
  });

  const parametrState = useSelector((state: RootState) => {
    // @ts-ignore
    return userParameterByNameSelector(state, skillState.base_param);
  });

  const dispatch = useDispatch();

  const handleUpSkill = () => {
    if (skillState.value < parametrState && skillState.value < 5) {
      dispatch(
        userActions.upSkills({
          name: skill.name,
          value: Number(skillState.value) + 1,
        })
      );
    } else setError(true);
  };

  useEffect(() => {
    setError(false);
  }, [parametrState]);

  return (
    <div className={classes.card}>
      <div className={classes.background}></div>
      <div className={classes.text}>
        <StarIcon className={classes.star} url={skill.icon} />
        <h3>{skill.title}</h3>
        <p className={classes.desc}>{`${skill.text} ${skillState.value}`}</p>
        {error && (
          <p className={classes.error}>Достигнут максимальный уровень навыка</p>
        )}
        <IconButton onClick={() => handleUpSkill()}>
          <UpIcon className={classes.btn__icon} />
        </IconButton>
      </div>
    </div>
  );
};

export default SkillCard;
