import React from 'react';
import { translate } from 'i18n-jsfp';

import { Text, View } from 'react-native';
import strings from './strings';

const Screen3 = ({ navigation }) => {
  React.useEffect(() => {
    navigation.setOptions({
      title: translate(strings.screen3),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{translate(strings.hello)}</Text>
      <Text>{translate(strings.onScreen3)}</Text>
    </View>
  );
};

export default Screen3;
