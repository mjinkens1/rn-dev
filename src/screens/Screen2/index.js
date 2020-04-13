import React from 'react';
import { translate } from 'i18n-jsfp';

import { Button, Text, View } from 'react-native';
import strings from './strings';

const Screen2 = ({ navigation }) => {
  React.useEffect(() => {
    navigation.setOptions({
      title: translate(strings.screen2),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{translate(strings.hello)}</Text>
      <Text>{translate(strings.onScreen2)}</Text>
      <Button
        title={translate(strings.goToScreen3)}
        onPress={() => navigation.navigate('Screen3')}
      />
    </View>
  );
};

export default Screen2;
