import classes from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={classes.container}>
      <img src="assets/images/banner3.jpg" alt="" className={classes.bcg} />
      <h1 className={classes.title}>MAKE SKILL <br/> NOT WAR</h1>
    </div>
  );
};

export default Banner;
