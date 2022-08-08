import MenuST from 'components/MenuST/MenuST';
import TxtConverter from 'components/TxtConverter/TxtConverter';
import './reset.css';
import './App.css';
import { useSelectedLanguage } from 'assets/state/hooks/useSelectedLanguage';
import Footer from 'components/Footer/Footer';

const App = () => {

  const language = useSelectedLanguage();
  document.title = `${language.texts.pagetitle} - Simple Tools`;

  return (
    <>
      <MenuST />
      <TxtConverter />
      <Footer />
    </>
  );
};

export default App;

