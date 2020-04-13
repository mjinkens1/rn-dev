import { addTranslationsMulti } from 'i18n-jsfp';

export const translations = {
  en: {
    hello: 'Hello!',
    onScreen3: 'You are on screen number 3',
    screen3: 'Screen 3',
  },
  es: {
    hello: '¡Hola!',
    onScreen3: 'Estás en la pantalla número 3',
    screen3: 'Pantalla 3',
  },
  ur: {
    hello: 'ہیلو',
    onScreen3: 'آپ اسکرین نمبر ۳ پر ہیں',
    screen3: 'آپ اسکرین ۳',
  },
};

const translationOptions = {
  ur: { isRTL: true },
};

export default addTranslationsMulti(translations, translationOptions);
