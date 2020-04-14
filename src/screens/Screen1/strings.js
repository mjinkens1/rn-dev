import { addTranslationsMulti } from 'i18n-jsfp';

export const translations = {
  en: {
    goToScreen2: 'Go to Screen Number 2',
    hello: 'Hello!',
    onScreen1: 'You are on screen number 1',
    screen1: 'Screen 1',
  },
  es: {
    goToScreen2: 'Ir a la Pantalla Número 2',
    hello: '¡Hola!',
    onScreen1: 'Estás en la pantalla número 1',
    screen1: 'Pantalla 1',
  },
  ur: {
    goToScreen2: 'اسکرین ۲ پر ملا',
    hello: 'ہیلو',
    onScreen1: 'آپ اسکرین نمبر ۱ پر ہیں',
    screen1: 'اسکرین ۱',
  },
};

const strings = addTranslationsMulti(translations);

export default strings;
