import classes from "./FightPage.module.scss";
import Fight from "../../components/Fight/Fight";

const FightPage = () => {
  return (
    <div className={classes.container}>
      <Fight />
    </div>
  );
};

export default FightPage;
