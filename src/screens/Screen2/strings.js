import { addTranslationsMulti } from 'i18n-jsfp';

export const translations = {
  en: {
    goToScreen3: 'Go to Screen Number 3',
    hello: 'Hello!',
    onScreen2: 'You are on screen number 2',
    screen2: 'Screen 2',
  },
  es: {
    goToScreen3: 'Ir a la Pantalla Número 2',
    hello: '¡Hola!',
    onScreen2: 'Estás en la pantalla número 2',
    screen2: 'Pantalla 2',
  },
  ur: {
    goToScreen3: 'اسکرین ۳ پر ملا',
    hello: 'ہیلو',
    onScreen2: 'آپ اسکرین نمبر ۲ پر ہیں',
    screen2: '۲ اسکرین',
  },
};

const translationOptions = {
  ur: { isRTL: true },
};

export default addTranslationsMulti(translations, translationOptions);
