import { useState } from "react";
import Button from "../../ui/buttons/Button/Button";
import CharacterBanner from "../CharacterBanner/CharacterBanner";
import classes from "./CharacterShortInfo.module.scss";
import Input from "../../ui/input/Input";
import Bar from "../../ui/bar/Bar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userStateSelector } from "../../../store/modules/user/selectors";
import { userActions } from "../../../store/modules/user/actions";

const CharacterShortInfo = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const user = useSelector(userStateSelector);

  const [nameInputValue, setNameInputValue] = useState<string>(user.name);

  const dispatch = useDispatch();

  const handleNameChange = () => {
    dispatch(userActions.changeName(nameInputValue));
  };

  return (
    <div className={classes.container}>
      <CharacterBanner />
      <div className={classes.character}>
        <div className={classes.avatar}>
          <img
            className={classes.avatar__img}
            src={"/assets/images/avatars/frontend.png"}
            alt="your avatar"
          />
        </div>
        <div className={classes.info}>
          <Bar value={user.depend_parametrs.vitality} />
          <div className={classes.footer}>
            {isFormOpen ? (
              <Input
                placeholder="Введите имя"
                onChange={setNameInputValue}
                value={nameInputValue}
              />
            ) : (
              <p className={classes.footer__name}>{user.name}</p>
            )}
            <Button
              onClick={() => {
                setIsFormOpen(!isFormOpen);
                isFormOpen && handleNameChange();
              }}
            >
              {isFormOpen ? "Сохранить имя" : "Изменить имя"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterShortInfo;
