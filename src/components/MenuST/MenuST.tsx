import Select from './Select/Select';
import Logo from './Logo/Logo';
import styles from './MenuST.module.scss';

const MenuST = () => {
  
  return(
    <header className={styles.stheader}>
      <Logo />
      <Select />
    </header>
  );
};

export default MenuST;