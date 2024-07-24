import React, { useEffect } from 'react'
import AuthStack from './AuthStack'
import TabNavigator from './TabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { useDB } from '../db'
import { setUser } from '../features/Auth/AuthSlice'

const MainNavigator = () => {
    const user = useSelector(state => state.authReducer.value.user)
    const { getSession } = useDB()
    const dispatch = useDispatch()

    useEffect(() => {
      (async () => {
        try {
          const response = await getSession()
          if (response) {
            console.log(response) // Para verificar que la respuesta es la esperada
            dispatch(
              setUser({
                data:{
                  email: response.email,
                  localId: response.localId,
                  idToken: response.token,
                  }
              })
            )
          }
        } catch (error) {
          console.log(error)
        }
      })()
    }, []) // Añade `dispatch` y `getSession` como dependencias

    return (
      <NavigationContainer>
        {user ? <TabNavigator /> : <AuthStack />}
      </NavigationContainer>
    )
}

export default MainNavigator