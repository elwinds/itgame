import IconButton from '../../../ui/buttons/IconButton/IconButton';
import Logo from '../../../ui/icons/Logo';
import ReloadIcon from '../../../ui/icons/Reload';
import classes from './FightingResult.module.scss';

interface FightingResultProps {
  fightingResult: string;
  closeModal: () => void;
}

const FightingResult:React.FC<FightingResultProps> = ({fightingResult, closeModal}) => {
    return (
      <div className={classes.result}>
        <Logo className={classes.result__logo} />
        <div className={classes.result__col}>
          <h1 className={classes.result__title}>{fightingResult}</h1>
          <IconButton className={classes.result__btn} onClick={closeModal}>
            <ReloadIcon className={classes.result__btn__icon} />
          </IconButton>
        </div>
      </div>
    );
}
 
export default FightingResult;