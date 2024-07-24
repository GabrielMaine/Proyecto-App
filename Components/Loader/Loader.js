import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated, Easing } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Loader = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Configuración de la animación
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000, // Duración de un ciclo de rotación en milisegundos
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  // Interpolación de valores para la rotación
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <FontAwesome5 name={'spinner'} size={55} />
      </Animated.View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});