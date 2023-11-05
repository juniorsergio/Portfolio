import { createContext, useContext, useState } from 'react';
import type { ReactNode, Dispatch, SetStateAction } from 'react';
import { enTranslation } from '@app/cdn/en';
import { ptBrTranslation } from '@app/cdn/ptBr';
import { CdnData } from '@app/interfaces/CdnData';

interface TranslationProviderProps {
    children: ReactNode;
}

interface TranslationContextData {
    language: string;
    setLanguage: Dispatch<SetStateAction<string>>;
    translation: CdnData;
};

const TranslationContext = createContext({} as TranslationContextData);
export const useTranslation = () => useContext(TranslationContext);

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
    const [language, setLanguage] = useState(navigator.language);
    const translation: Record<string, CdnData> = {
        en: enTranslation,
        'pt-BR': ptBrTranslation,
    };

    return (
        <TranslationContext.Provider value={{ language, setLanguage, translation: translation[language] ?? translation.en }} >
            {children}
        </TranslationContext.Provider>
    )
};
