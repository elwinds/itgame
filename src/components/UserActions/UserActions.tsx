import { useSelector } from "react-redux";
import Button from "../ui/buttons/Button/Button";
import classes from "./UserActions.module.scss";
import { UserState } from "../../store/modules/user/types";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/modules/user/actions";
import { userStateSelector } from "../../store/modules/user/selectors";

const UserActions = () => {
  const userData = useSelector(userStateSelector);

  const fileData =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(userData, null, 2));

  const dispatch = useDispatch();

  const uploadCharacter = (event: any) => {
    const reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    reader.addEventListener("load", () => {
      const uploadedCharacter = JSON.parse(String(reader.result)) as UserState;
      dispatch(userActions.uploadCharacter(uploadedCharacter));
    });
  };

  return (
    <div className={classes.container}>
      <a href={fileData} download={"Character.json"}>
        <Button onClick={() => {}}>Сохранить персонажа</Button>
      </a>
      <label className={classes.inputfile}>
        <input
          className={classes.inputfile__input}
          type="file"
          accept="application/json"
          onChange={uploadCharacter}
        />
        <span className={classes.inputfile__text}>Загрузить персонажа</span>
      </label>
    </div>
  );
};

export default UserActions;
