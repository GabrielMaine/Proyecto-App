import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import { colors } from '../../Global/colors';

const InputForm = ({ label, onChange, error = "", isSecure = false }) => {
  const [input, setInput] = useState("");

  const onChangeText = (text) => {
    setInput(text);
    onChange(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={onChangeText}
          secureTextEntry={isSecure}
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16, // Espaciado entre cada campo de entrada
    width: '100%',
    padding: 5,
    // backgroundColor: 'red'
  },
  inputRow: {
    flexDirection: 'column', // Pone el label y el input en línea
    alignItems: 'center', // Alinea verticalmente el label y el input
    marginBottom: 4, // Espacio entre la fila de entrada y el error
  },
  label: {
    // width: 80, 
    fontSize: 16,
    color: '#333',
    marginRight: 8,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  input: {
    // flex: 1, 
    borderWidth: 1,
    borderColor: colors.gray[400],
    padding: 8,
    borderRadius: 4,
    fontSize: 16,
    width: '100%'
  },
  error: {
    color: colors.red[600],
    fontSize: 12,
  },
});