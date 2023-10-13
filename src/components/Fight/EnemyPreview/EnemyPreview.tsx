import { useSelector } from "react-redux";
import classes from "./EnemyPreview.module.scss";
import { RootState } from "../../../store/rootReducer";
import { enemyByNameSelector } from "../../../store/modules/enemies/selectors";
import { EnemiesKeys } from "../../../store/modules/enemies/types";

interface EnemyPreviewProps {
  name: EnemiesKeys;
}

const EnemyPreview: React.FC<EnemyPreviewProps> = ({ name }) => {
  const enemy = useSelector((state: RootState) => {
    return enemyByNameSelector(state, name);
  });

  return (
    <div className={`${classes.container} ${classes.enemy}`}>
      <div className={classes.info}>
        <h3 className={classes.info__name}>{enemy.name}</h3>
        <p className={classes.info__text}>{enemy.description}</p>
      </div>
      <p className={classes.hint}>
        Кликните на аватар противника, чтобы начать бой
      </p>
    </div>
  );
};

export default EnemyPreview;
