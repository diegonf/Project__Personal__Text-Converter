import MenuST from 'components/MenuST/MenuST';

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
    <MenuST languages={languages} />
  );
};

export default App;

