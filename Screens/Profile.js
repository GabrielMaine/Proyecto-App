import { StyleSheet, Text, View, Image } from 'react-native'
import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '../features/Auth/AuthSlice'
import { useDB } from '../db'
import AddButton from '../Components/Globals/AddButton'

const Profile = ({navigation}) => {

    const user = useSelector(state => state.authReducer.value.user)
    const [image, setImage] = useState(null)

    // const dispatch = useDispatch()
    // const {imageCamera, localId} = useSelector((state) => state.auth.value)
    // const {data: imageFromBase} = useGetProfileimageQuery(localId)
    const { getSession } = useDB()
    const [userData, setUserData] = useState({})
    
    // const launchCamera = async () => {
    //   navigation.navigate("Image Selector");
    // };

    // const launchLocation = async () => {
    //   navigation.navigate("List Address");
    // };

    // const defaultImageRoute = "../../assets/user.png";

    useEffect(()=>{
        const response = getSession()
        setUserData(response)
    },[])

    return (
    <View>
        <Text>Profile</Text>
        <Text>{userData.email}</Text>
        {image
        ?
        null
        :
        <>
          <Image
            source={require('../assets/user.png')}
            style={styles.profilePicture}
            resizeMode='cover'
          />
          <AddButton title={"Cambiar foto de perfil"}/>
        </>
        }
    </View>
    )
}

export default Profile

const styles = StyleSheet.create({
  profilePicture:{
    width: 100,
    height: 100
  }
})