import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Components/Header";
import Profile from "../Screens/Profile";
import ImageSelector from "../Screens/ImageSelector";
// import LocationSelector from "../screens/LocationSelector";
// import ListAddress from "../screens/ListAddress"; 

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        header: () => <Header title="Perfil"/>
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Image Selector" component={ImageSelector} />
      {/* <Stack.Screen name="List Address" component={ListAddress} />
      <Stack.Screen name="Location Selector" component={LocationSelector} /> */}
    </Stack.Navigator>
  );
}

export default ProfileStack