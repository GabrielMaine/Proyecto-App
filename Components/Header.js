import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../Global/colors'
import LogoutButton from './LogoutButton';

const Header = ({title="Inicio"}) => {
  return (
    <View style={styles.header}>
      <View style={styles.children1}>
        <View>
          <Image
            source={require('../assets/Logo/Logo.png')}
            style={styles.logo}
          />
        </View>
      </View>
      <View style={styles.children2}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <LogoutButton/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
      backgroundColor: colors.gray[200],
      width: "100%",
      // marginTop: 50,
      padding: 5,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    children1:{
      flex: 3,
      justifyContent: 'center'
    },
    logo:{
      width: 60,
      height: 60,
      resizeMode: 'center',
      textAlign: 'left',
      marginLeft: 5
    },
    children2:{
      flex: 4,
      alignContent: 'center',
      justifyContent: 'center'
    },
    title:{
      textAlign: "center",
      verticalAlign: 'middle',
      fontSize: 22,
      fontWeight: 'bold'
    },
    children3:{
      flex: 3,
      justifyContent: 'center'
    },
    logout:{
      textAlign: 'right',
      marginRight: 5,
      color: "black"
    }
})