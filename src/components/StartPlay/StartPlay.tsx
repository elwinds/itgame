import IconButton from "../ui/buttons/IconButton/IconButton";
import Logo from "../ui/icons/Logo";
import PlayIcon from "../ui/icons/Play";
import classes from "./StartPlay.module.scss";
import { useNavigate } from "react-router-dom";

const StartPlay = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <Logo className={classes.logo} />
      <div className={classes.play}>
        <h1 className={classes.play__title}>IT GAME</h1>
        <IconButton
          className={classes.play__btn}
          onClick={() => navigate("/character")}
        >
          <PlayIcon className={classes.play__btn__icon} />
        </IconButton>
      </div>
    </div>
  );
};

export default StartPlay;
