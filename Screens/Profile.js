import { StyleSheet, Text, View, Image, Pressable, Platform } from 'react-native'
import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useDB } from '../db'
import { clearUser } from '../features/Auth/AuthSlice'
import { useGetProfileimageQuery } from '../Services/shopService'
import SubmitButton from '../Components/Globals/SubmitButton'

const Profile = ({navigation}) => {
    const dispatch = useDispatch()
    const {imageCamera, localId} = useSelector((state) => state.authReducer.value)
    const {data: imageFromBase} = useGetProfileimageQuery(localId)
    const { getSession, truncateSessionTable } = useDB()
    const [userData, setUserData] = useState({})
    
    const launchCamera = async () => {
      navigation.navigate("Image Selector");
    };

    const signOut = () => {
      try {
        truncateSessionTable()
        dispatch(clearUser())
      } catch (error) {
        console.log({errorSignOutDB: error})
      }
    }

    useEffect(()=>{
        const response = getSession()
        setUserData(response)
    },[])

    return (
    <View style={styles.main}>
        {imageFromBase || imageCamera
        ?
          <Image
          source={{uri: imageFromBase?.image || imageCamera}}
          style={styles.profilePicture}
          resizeMode='cover'
        />
        :
        <>
          <Image
            source={require('../assets/user.png')}
            style={styles.profilePicture}
            resizeMode='cover'
          />
        </>
        }
        <View style={styles.buttonContainer}>
          <SubmitButton
            onPress={launchCamera}
            title={
              imageFromBase || imageCamera
                ? "Cambia tu foto de perfil"
                : "Agrega una foto de perfil"
            }
          />
          <SubmitButton
            onPress={signOut}
            title={'Cerrar sesion'}
          />
        </View>
    </View>
    )
}

export default Profile

const styles = StyleSheet.create({
  main:{
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  profilePicture:{
    width: 200,
    height: 200,
    borderRadius: 100
  },
  buttonContainer:{
    width: '80%'
  }
})