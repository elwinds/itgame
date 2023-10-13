import classes from './CharacterPage.module.scss';
import CharacterShortInfo from "../../components/Character/CharacterShortInfo/CharacterShortInfo";
import Parametrs from '../../components/Parametrs/Parametrs';
import Skills from '../../components/Skills/Skills';
import Banner from '../../components/Banner/Banner';
import UserActions from '../../components/UserActions/UserActions';

const CharacterPage = () => {

  return (
    <div className={classes.container}>
      <CharacterShortInfo/>
      <Parametrs/>
      <Banner/>
      <Skills/>
      <UserActions/>
    </div>
  );
};

export default CharacterPage;
