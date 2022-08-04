import Select from './Select/Select';
import Logo from './Logo/Logo';
import styles from './MenuST.module.scss';
import { ILanguage } from './assets/menuInterfaces';

interface Props {
  languages: ILanguage[]
}

const MenuST = (props: Props) => {

  const {languages} = props;
  
  return(
    <header className={styles.stheader}>
      <Logo />
      <Select languages={languages}/>
    </header>
  );
};

export default MenuST;