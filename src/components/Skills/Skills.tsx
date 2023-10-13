import classes from "./Skills.module.scss";
import SkillsList from "./SkillsList/SkillsList";

const Skills = () => {
  return (
    <div className={classes.container}>
      <div className={classes.bcg}></div>
      <div className={classes.header}>
        <h2 className={classes.header__title}>СКИЛЫ</h2>
      </div>
      <div className={classes.skills}>
        <SkillsList/>
      </div>
    </div>
  );
};

export default Skills;
