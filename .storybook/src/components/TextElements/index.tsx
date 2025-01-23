import React from 'react';
import { t } from 'i18next';

export const DocsTitle: React.FC<{ text: string }> = ({ text }) => {
  return <h1>{t(text)}</h1>;
};

export const DocsSubtitle: React.FC<{ text: string }> = ({ text }) => {
  return <h2>{t(text)}</h2>;
};

export const DocsDescription: React.FC<{ text: string }> = ({ text }) => {
  return <h6>{t(text)}</h6>;
};
