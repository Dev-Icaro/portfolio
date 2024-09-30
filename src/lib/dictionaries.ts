import 'server-only';
import { Locale } from '@/../i18n-config';

const dictionaries = {
  'en-US': () => import('@/dictionaries/en.json').then(module => module.default),
  'pt-BR': () => import('@/dictionaries/pt.json').then(module => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries['en-US']();
