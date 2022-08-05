import MenuST from 'components/MenuST/MenuST';
import TxtConverter from 'components/TxtConverter/TxtConverter';
import './reset.css';
import './App.css';

const App = () => {
  const languages = [      //list with the languages available for the website
    {
      value: 'pt-br',
      label: 'Portuguese',
      image: 'assets/imgs/menu/pt-br.gif'
    },
    {
      value: 'en',
      label: 'English',
      image: 'assets/imgs/menu/en.jpg'
    }
  ];
  return (
    <>
      <MenuST languages={languages} />
      <TxtConverter />
    </>
  );
};

export default App;

