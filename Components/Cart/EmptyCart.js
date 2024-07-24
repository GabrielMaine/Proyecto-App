import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { colors } from '../../Global/colors';
import { FontAwesome5 } from '@expo/vector-icons';


const EmptyCart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu carrito está vacío</Text>
      <Text style={styles.subtitle}>Parece que no has agregado nada a tu carrito todavía.</Text>
      <Text style={styles.subtitle2}>Te invitamos a recorrer nuestra tecno tienda.</Text>
      <FontAwesome5 name="shopping-cart" size={36} color={"black"} />
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray[500],
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle2: {
    fontSize: 16,
    color: colors.blue[400],
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic'
  },
});
