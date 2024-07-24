import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { colors } from '../../Global/colors';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../features/Cart/cartSlice';
import { FontAwesome5 } from '@expo/vector-icons';

const CounterLite = ({ onPress=()=>{}, min = 1, max = 10, initial = 1, itemSlug, item }) => {
    const [counter, setCounter] = useState(initial);
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cartReducer.value.items)

    const findItemQuantity = (slug) => {
        const item = cartItems.find(item => item.slug === slug);
        return item ? item.quantity : initial;
    };

    // useEffect para sincronizar el contador con el estado del carrito
    useEffect(() => {
        const currentQuantity = findItemQuantity(itemSlug);
        setCounter(currentQuantity);
    }, [cartItems, itemSlug]);

    const increment = () => {
        if (counter < max) {
            setCounter(counter + 1);
            dispatch(addItem({...item, quantity: 1}))
        }
    };

    const decrement = () => {
        if (counter > min) {
            setCounter(counter - 1);
            dispatch(addItem({...item, quantity: -1}))
        }
    };

    const remove = () => {
        dispatch(removeItem({slug: itemSlug}))
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonRow}>
                <Button title="-" onPress={decrement} disabled={counter === min} style={styles.button}/>
                <Text style={styles.counterText}>{counter}</Text>
                <Button title="+" onPress={increment} disabled={counter === max} style={styles.button}/>
            </View>
            <Pressable onPress={remove}>
                <FontAwesome5 name={'trash'} size={28} style={styles.logout} />
            </Pressable>
        </View>
    );
};

export default CounterLite;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
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
        // marginBottom: 10,
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
        width: 50,
    }
});