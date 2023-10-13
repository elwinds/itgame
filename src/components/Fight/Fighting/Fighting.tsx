import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import classes from "./Fighting.module.scss";
import IconButton from "../../ui/buttons/IconButton/IconButton";
import AttackIcon from "../../ui/icons/Attack";
import Bar from "../../ui/bar/Bar";
import FightingResult from "./FightingResult/FightingResult";
import { RootState } from "../../../store/rootReducer";
import { userStateSelector } from "../../../store/modules/user/selectors";
import { userActions } from "../../../store/modules/user/actions";
import { enemiesActions } from "../../../store/modules/enemies/actions";
import { enemyByNameSelector } from "../../../store/modules/enemies/selectors";
import { EnemiesKeys } from "../../../store/modules/enemies/types";

interface FightingProps {
  enemy: EnemiesKeys;
  closeModal: () => void;
}

const Fighting: React.FC<FightingProps> = ({ enemy, closeModal }) => {
  const userState = useSelector(userStateSelector);
  const enemyState = useSelector((state: RootState) => {
    return enemyByNameSelector(state, enemy);
  });

  const [fightingResult, setFightingResult] = useState("");
  const [healthPointsBars, setHealthPointsBars] = useState({
    user: 100,
    enemy: 100,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initUser());
  }, [dispatch]);

  const [speechActive, setSpeechActive] = useState(false);

  const handlerAttack = () => {
    if (userState.depend_parametrs.vitality > 0 && enemyState.vitality > 0) {
      setSpeechActive(true);
      dispatch(
        enemiesActions.takeDamageEnemy({
          enemy,
          vitality: enemyState.vitality - 1,
        })
      );

      const newHealthPointValueEnemy = (1 / (enemyState.power + 3)) * 100;
      setHealthPointsBars((healthPointsBars) => ({
        ...healthPointsBars,
        enemy: healthPointsBars.enemy - newHealthPointValueEnemy,
      }));

      dispatch(
        userActions.takeDamageUser(userState.depend_parametrs.vitality - 1)
      );

      const newHealthPointValueUser =
        (1 / (userState.parametrs.power + 3)) * 100;

      setHealthPointsBars((healthPointsBars) => ({
        ...healthPointsBars,
        user: healthPointsBars.user - newHealthPointValueUser,
      }));
    } else {
      userState.depend_parametrs.vitality === 0
        ? setFightingResult("Вы проиграли!")
        : setFightingResult("Вы выиграли!");
    }
  };

  useEffect(() => {
    if (speechActive) setTimeout(() => setSpeechActive(false), 3000);
  }, [speechActive]);

  const getPhrase = (character: "user" | "enemy") => {
    let phrases =
      character === "user"
        ? userState.phrases[
            Math.floor(Math.random() * userState.phrases.length)
          ]
        : enemyState.phrases[
            Math.floor(Math.random() * userState.phrases.length)
          ];

    return phrases;
  };

  return (
    <div className={classes.container}>
      {fightingResult ? (
        <FightingResult
          fightingResult={fightingResult}
          closeModal={closeModal}
        />
      ) : (
        <>
          <div className={classes.card}>
            <div
              className={`${classes.speech} ${classes.bottom} ${
                speechActive ? classes.animateSpeech : ""
              }`}
            >
              {getPhrase("user")}
            </div>
            <div className={classes.card__avatar}>
              <img
                className={classes.card__avatar__img}
                src={"/assets/images/avatars/frontend.png"}
                alt="your avatar"
              />
            </div>
            <h2 className={classes.card__name}>{userState.name}</h2>
            <Bar
              value={userState.depend_parametrs.vitality}
              barLengthPersent={healthPointsBars.user}
            />
          </div>
          <div className={classes.actions}>
            <IconButton className={classes.btn} onClick={() => handlerAttack()}>
              <AttackIcon className={classes.btn__icon} />
            </IconButton>
            <h1>VS</h1>
          </div>
          <div className={classes.card}>
            <div
              className={`${classes.speech} ${classes.bottom} ${
                speechActive ? classes.animateSpeech : ""
              }`}
            >
              {getPhrase("enemy")}
            </div>
            <div className={classes.card__avatar}>
              <img
                className={classes.card__avatar__img}
                src={`/assets/images/avatars/${enemy}.png`}
                alt="your avatar"
              />
            </div>
            <h2 className={classes.card__name}>{enemyState.name}</h2>
            <Bar
              value={enemyState.vitality}
              barLengthPersent={healthPointsBars.enemy}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Fighting;
