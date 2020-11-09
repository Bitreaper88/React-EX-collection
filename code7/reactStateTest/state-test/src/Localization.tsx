import React, { createContext } from 'react';

const langs = {
  en: {
    header:"Navigation", 
    paragraf:"Hello",
    langChoice: 'Choose your language:'
  },
  fi: {
    header:"Navigaatio", 
    paragraf:"Moi",
    langChoice: 'Valitse kieli:'
  }
};

interface Props {
  selected: string,
  children: JSX.Element[] | JSX.Element
}

export const LangContext = createContext(langs.en);
export const LangProvider = (props: Props) => {
  let lang = langs.fi;
  if (props.selected === "fi"){
    lang = langs.fi;
  }
  else {
    lang = langs.en;
  }

  return (
      <LangContext.Provider value={lang}>
         {props.children}
      </LangContext.Provider>
  )
}