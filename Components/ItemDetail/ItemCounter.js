import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { colors } from '../../Global/colors';

const ItemCounter = ({ onPress, min = 1, max = 10, initial = 1 }) => {
    const [counter, setCounter] = useState(initial);

    const increment = () => {
        if (counter < max) {
            setCounter(counter + 1);
        }
    };

    const decrement = () => {
        if (counter > min) {
            setCounter(counter - 1);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonRow}>
                <Button title="-" onPress={decrement} disabled={counter === min} style={styles.button}/>
                <Text style={styles.counterText}>{counter}</Text>
                <Button title="+" onPress={increment} disabled={counter === max} style={styles.button}/>
            </View>
            <Button title="Agregar al carrito" onPress={() => onPress(counter)} style={styles.largeButton}/>
        </View>
    );
};

export default ItemCounter;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: colors.blue[200],
        // borderWidth: 2,
        padding: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '72%', // Use the full width of the container
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    counterText: {
        fontSize: 18,
        marginHorizontal: 10,
    },
    largeButton: {
        width: '100%', // Use the full width of the container
    },
    button: {
        width: 50
    }
});