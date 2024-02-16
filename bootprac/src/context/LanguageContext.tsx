// import { createContext } from 'react';

// export const LanguageContext = createContext('English');

import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

export enum LanguageType {
  English = 'English',
  French = 'French',
}

export type LanguageContextType = {
  language: string | null;
  setLanguage: Dispatch<SetStateAction<string | null>>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const LanguageContextProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string | null>(LanguageType.English);
  return (
    // the Provider gives access to the context to its children
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
export { LanguageContextProvider };
