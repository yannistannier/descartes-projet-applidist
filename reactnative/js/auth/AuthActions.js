import { appAuthToken } from '../utils/storage'
import { Alert } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'

import { AUTH_REQUESTED, AUTH, AUTH_USER_NOT_EXISTS, AUTH_REGISTER_FACEBOOK, AUTH_LOGOUT } from './AuthConstants'
import { userAuthenticated, retreiveUser } from '../user/UserActions'
import { api }  from '../utils/request'


export const authFacebook = (token) => {
  return {
      type: AUTH,
      payload: api.post('/auth/facebook/', {token}) // a enlever (projet jee)
      // payload: api.postjava('/token', {token})
  }
}

export const userNotExists = (values) => {
    return {
        type: AUTH_USER_NOT_EXISTS,
        payload: api.post('/auth/check/', values)
    }
}

export const authRegisterFacebook = (values) => {
    return {
        type: AUTH_REGISTER_FACEBOOK,
        payload: api.post('/auth/register/facebook/', values)
    }
}


export const verifAuthFacebook = (values) => {
  return function(dispatch) {
    dispatch(authFacebook(values))
      .then((response) => {
          
          appAuthToken.storeSessionToken(response.action.payload.data.token)
          // dispatch(userAuthenticated(response.action.payload.data.user)) // a remettre
          dispatch(userAuthenticated(response.action.payload.data)) // a virer, garder juste le temps ddu projet JEE
          Actions.tabbar({type: ActionConst.REPLACE}) // changer

      }).catch((error) => {
          console.log(error)
          Actions.facebookForm({type: ActionConst.REPLACE})
      })
  }
}


export const verifyAccessToken = () => {
  return function (dispatch) {
    appAuthToken.getSessionToken()
      .then((accessToken) => {
        if (!accessToken) {

          dispatch({type:AUTH_REQUESTED})

        } else {
          
          return(dispatch(retreiveUser()))
            .then((response) => {
                  
                // Actions.share({type: ActionConst.REPLACE}) //changer
                // Actions.tabbar({type: ActionConst.REPLACE}) //changer
                Actions.swipeask({type: ActionConst.REPLACE, launch:true}) //changer
                 //changer

            }).catch((error) => {
                appAuthToken.deleteSessionToken()
                dispatch({type:AUTH_REQUESTED})
            })

        }
      })
  }
}

export const logout = () => {
  return function(dispatch){
      appAuthToken.deleteSessionToken()
      dispatch({type:AUTH_LOGOUT})
      Actions.home({type:"reset"})
  }
} 
