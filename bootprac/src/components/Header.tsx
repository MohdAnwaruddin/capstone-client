import { useContext } from 'react';
import LanguageContext, {
  LanguageContextType,
  LanguageType,
} from '../context/LanguageContext';
type HeaderProps = {
  title: string;
  totalItems: number;
};

//interface Props {
//  title: string;
//  totalItems: number;
//}
const Header = ({ title, totalItems }: HeaderProps) => {
  //const lang = useContext(LanguageContext);

  const { language, setLanguage } = useContext(
    LanguageContext
  ) as LanguageContextType;
  return (
    <header>
      <h1>{title}</h1>
      <span>Items:{totalItems}</span>
      <h2>{language}</h2>
      <div>
        <h1>{language}</h1>
        <button onClick={() => setLanguage(LanguageType.English)}>
          English
        </button>

        <button onClick={() => setLanguage(LanguageType.French)}>French</button>
      </div>
    </header>
  );
};

export default Header;
