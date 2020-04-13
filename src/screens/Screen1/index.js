import React from 'react';
import { translate } from 'i18n-jsfp';

import { Button, Text, View } from 'react-native';
import strings from './strings';

const Screen1 = ({ navigation }) => {
  React.useEffect(() => {
    navigation.setOptions({
      title: translate(strings.screen1),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{translate(strings.hello)}</Text>
      <Text>{translate(strings.onScreen1)}</Text>
      <Button
        title={translate(strings.goToScreen2)}
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
};

export default Screen1;
