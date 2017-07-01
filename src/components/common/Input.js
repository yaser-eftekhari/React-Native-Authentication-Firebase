import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ lable, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, lableStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={lableStyle}>
        {lable}
      </Text>
      <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  lableStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
