import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { colors } from '../../Global/colors';

const SubmitButton = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#005f9e' : '#007BFF',
          transform: pressed ? [{ scale: 0.98 }] : [{ scale: 1 }],
        },
        styles.button,
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    // borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue[500],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // Añade sombra en Android
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});