import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import InputForm from '../Components/Globals/InputForm';
import SubmitButton from '../Components/Globals/SubmitButton';
import { useLoginMutation } from '../Services/authService';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/Auth/AuthSlice';
import { useDB } from '../db';
import { colors } from '../Global/colors';

const Login = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { insertSession } = useDB();

  const [triggerLogin, result] = useLoginMutation();

  useEffect(() => {
    try {
      if (result.isSuccess) {
        dispatch(setUser({
          data: {
            email: result.data.email,
            idToken: result.data.idToken,
            localId: result.data.localId,
          }
        }));
        insertSession({
          email: result.data.email,
          localId: result.data.localId,
          token: result.data.idToken
        });
        console.log("Sesion insertada");
      }
    } catch (error) {
      console.log("Login error: " + error.message);
    }
  }, [result]);

  const onSubmit = () => {
    triggerLogin({ email, password, returnSecureToken: true });
  };

  return (
    <View style={styles.main}>
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Login</Text>
            </View>
            <InputForm label={"Email"} onChange={setEmail} error={""} />
            <InputForm label={"Password"} onChange={setPassword} error={""} isSecure={true} />
            <SubmitButton onPress={onSubmit} title={"Ingresar"} />
            <Pressable onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signupText}>¿No tenes cuenta? Registrate</Text>
            </Pressable>
        </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue[100],
  },
  container:{
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    width: '80%',
    marginBottom: 50
  },
  textContainer:{
    width: "100%",
    borderBottomColor: colors.gray[800],
    borderBottomWidth: 2,
    padding: 5
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    // marginBottom: 24,
    color: '#333',
    textAlign: 'center'
  },
  signupText: {
    marginTop: 16,
    color: '#007BFF',
    fontWeight: 'bold',
  },
});