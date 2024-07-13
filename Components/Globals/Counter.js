import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { increment, decrement, incrementByAmount, reset } from '../../features/Counter/counterSlice'

const Counter = () => {
    const [inputToAdd, setInputToAdd] = useState(0)
    const confirmAdd = () => {
        dispatch(incrementByAmount(inputToAdd))
    }

    const count = useSelector(state => state.counterReducer.value)
    const dispatch = useDispatch()
    
    return (
    <View>
        <View>
            <Pressable
                onPress={()=> dispatch(decrement())}>
                <Text>-</Text>
            </Pressable>
            <Text>{count}</Text>
            <Pressable
                onPress={()=> dispatch(increment())}>
                <Text>+</Text>
            </Pressable>
        </View>
        <View>
            <TextInput
                placeholder='Cantidad a aumentar'
                value={inputToAdd}
                onChangeText={text=> setInputToAdd(Number(text))}
                />
            <Pressable
                onPress={confirmAdd}>
                <Text>Agregar</Text>
            </Pressable>
        </View>
        <Pressable
                onPress={()=> dispatch(reset())}>
                <Text>Reset</Text>
        </Pressable>
    </View>
    )
}

export default Counter

const styles = StyleSheet.create({})