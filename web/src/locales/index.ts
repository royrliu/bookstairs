import { buildConfig } from 'config/build-config';
import i18next from 'i18next';
import LanguageDetector, { DetectorOptions } from 'i18next-browser-languagedetector';
import en_US from 'locales/en-US';
import zh_CN from 'locales/zh-CN';
import zh_HK from 'locales/zh-HK';
import zh_TW from 'locales/zh-TW';
import { initReactI18next } from 'react-i18next';

// The supported language for bookstairs. Add new language support here in the future.
// This name definition is just followed http://www.unicode.org/reports/tr35/.
export type Language = 'zh-CN' | 'zh-HK' | 'zh-TW' | 'en-US';

// We make the english as our default language.
export const defaultLanguage: Language = 'en-US';

// All the CJK related language should return true. Means they have chinese characters in their languages.
export function hasChinese(lng: string): boolean {
  return !!['zh', 'ja', 'ko'].find(
    target => lng === target || lng.startsWith(`${target}-`) || lng.startsWith(`${target}_`),
  );
}

// All the available translation resources. We just import them programmatically for better control.
export const resources = {
  'en-US': en_US,
  'zh-CN': zh_CN,
  'zh-TW': zh_TW,
  'zh-HK': zh_HK,
};

// The auto language detection options for i18next.
// TODO Add golang based backend language detection for end user.
//  Read the tutorial https://www.i18next.com/misc/creating-own-plugins#languagedetector
const detectionOptions: DetectorOptions = {
  order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'htmlTag'],
  lookupQuerystring: 'lang',
  lookupCookie: 'bookstairs-lang',
  lookupLocalStorage: 'bookstairs-lang',
  lookupSessionStorage: 'bookstairs-lang',
  caches: ['cookie', 'localStorage', 'sessionStorage'],
  excludeCacheFor: [defaultLanguage],
  cookieMinutes: 10080,
  htmlTag: document.documentElement,
  cookieOptions: { path: '/', sameSite: 'strict' },
};

(async () => {
  await i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      detection: detectionOptions,
      fallbackLng: defaultLanguage,
      debug: buildConfig.debug,
      ns: ['errors'],
      interpolation: {
        // No need for react as it escapes by default.
        escapeValue: false,
      },
      resources,
    });
})();

// Use this instance for all the component in our frontend application.
export default i18next;
