import classes from "./Bar.module.scss";

interface BarProps {
  value: string | number;
  barLengthPersent?: number;
}

const Bar: React.FC<BarProps> = ({ value, barLengthPersent = 100 }) => {
  const progressWidth = `${barLengthPersent}%`;

  return (
    <div
      className={classes.bar}
      style={{ "--progress-width": progressWidth } as React.CSSProperties}
    >
      <p className={classes.bar__text}>{value} HP</p>
    </div>
  );
};

export default Bar;
