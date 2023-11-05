import { createContext, useContext, useState } from 'react';
import type { ReactNode, Dispatch, SetStateAction } from 'react';
import { enTranslation } from '../cdn/en';
import { ptBrTranslation } from '../cdn/ptBr';

interface TranslationProviderProps {
    children: ReactNode;
}

interface TranslationContextData {
    setLanguage: Dispatch<SetStateAction<string>>;
    translation: typeof enTranslation;
};

const TranslationContext = createContext({} as TranslationContextData);
export const useTranslation = () => useContext(TranslationContext);

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
    const [language, setLanguage] = useState(navigator.language);
    console.log(language)
    const translation = {
        en: enTranslation,
        'pt-BR': ptBrTranslation,
    };

    return (
        <TranslationContext.Provider value={{ setLanguage, translation: translation[language] }} >
            {children}
        </TranslationContext.Provider>
    )
};
