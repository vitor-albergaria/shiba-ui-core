import React, { useState } from 'react';
import i18n, { t } from 'i18next';
import * as S from './styles';

const LANGUAGES = ['pt', 'en'];
const THEMES = ['light', 'dark', 'ocean'];

export const SettingsOptions: React.FC = () => {
  const initialLanguage = i18n.language;
  const initialTheme = localStorage.getItem('theme') || 'light';

  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);
  const handleSelectLanguage = (locale: string) => setSelectedLanguage(locale);

  const [selectedTheme, setSelectedTheme] = useState(initialTheme);
  const handleSelectTheme = (theme: string) => setSelectedTheme(theme);

  const handleSettingsChanges = () => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('theme', selectedTheme);
    window.location.reload();
  };

  return (
    <S.ColumnWrapper>
      <S.Label>{t('settings_language')}</S.Label>

      <S.OptionsLine>
        {LANGUAGES.map((language) => (
          <S.OptionBox
            key={language}
            $isSelected={language === selectedLanguage}
            onClick={() => handleSelectLanguage(language)}
          >
            {language.toUpperCase()}
          </S.OptionBox>
        ))}
      </S.OptionsLine>

      <S.Label>{t('settings_theme')}</S.Label>

      <S.OptionsLine>
        {THEMES.map((theme) => (
          <S.OptionBox
            key={theme}
            $isSelected={theme === selectedTheme}
            onClick={() => handleSelectTheme(theme)}
          >
            {theme.toUpperCase()}
          </S.OptionBox>
        ))}
      </S.OptionsLine>

      <S.SettingsButton onClick={handleSettingsChanges}>
        {t('settings_confirm')}
      </S.SettingsButton>
    </S.ColumnWrapper>
  );
};
