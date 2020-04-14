import React from 'react';
import { configure, setCurrentLocale } from 'i18n-jsfp';

// Components
import { NavigationContainer } from '@react-navigation/native';

// Navigation
import { HomeStack } from 'navigation';

configure({ validLanguageTags: ['en'], scopeDelimiter: ';' });

const locales = [
  {
    countryCode: 'MX',
    languageTag: 'es-MX',
    languageCode: 'es',
  },
  {
    countryCode: 'PK',
    languageTag: 'ur-PK',
    languageCode: 'ur',
    isRTL: true,
  },
  {
    countryCode: 'US',
    languageTag: 'en-US',
    languageCode: 'en',
  },
];

function* localeGen() {
  while (true) {
    yield locales[0];
    yield locales[1];
    yield locales[2];
  }
}

const iterator = localeGen();

const App = () => {
  const [localeKey, setLocaleKey] = React.useState('');

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const { value } = iterator.next();
      setCurrentLocale(value);
      setLocaleKey(value.languageTag);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <NavigationContainer key={localeKey}>
      <HomeStack />
    </NavigationContainer>
  );
};

export default App;
