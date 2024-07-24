import { StyleSheet, View, Pressable } from 'react-native'
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch } from 'react-redux';
import { useDB } from '../db';
import { clearUser } from '../features/Auth/AuthSlice';

const LogoutButton = () => {

    const dispatch = useDispatch()
    const { truncateSessionTable } = useDB()

    const signOut = () => {
        try {
          truncateSessionTable()
          dispatch(clearUser())
        } catch (error) {
          console.log({errorSignOutDB: error})
        }
      }


    return (
    <View style={styles.view}>
        <Pressable onPress={signOut} style={styles.pressable}>
            <FontAwesome5 name="door-open" size={24} style={styles.logout} />     
        </Pressable>
    </View>
    )
}

export default LogoutButton

const styles = StyleSheet.create({    
    view:{
        flex: 3,
        justifyContent: 'center'
    },
    pressable:{
        width: 40,
        marginRight: 5,
        marginLeft: 'auto'
    },
    logout:{
        textAlign: 'right',
        marginRight: 5,
        color: "black"
}})