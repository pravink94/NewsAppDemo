import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import { navigate } from '../navigationRef';
import GoogleContext, { authentication } from '../utils/google_config';


const { NativeModules, Platform } = require('react-native');
const LoginManager = NativeModules.FBLoginManager;
const AccessToken = NativeModules.FBAccessToken;
console.log('AccessToken', AccessToken);

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signin':
            return { errorMessage: '', token: action.payload }
        case 'clear_error_message':
            return { ...state, errorMessage: '' };
        case 'signout':
            return { token: null, errorMessage: '' };
        default:
            return state;
    }
};


const tryLocalSignin = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            dispatch({ type: 'signin', payload: token });
            navigate('NewsListScreen');
        } else {
            navigate('LoginScreen');
        }
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' });
};

const onGmailLogin = (dispatch) => {
    return async () => {
        try {
            signout();
            console.log(GoogleContext);
            await GoogleContext.hasPlayServices();
            const userInfo = await GoogleContext.signIn();
            // var socialUser = new Object();
            // socialUser.id = userInfo.user.id;
            // socialUser.firstName = userInfo.user.givenName;
            // socialUser.lastName = userInfo.user.familyName;
            // socialUser.email = userInfo.user.email;
            // socialUser.mediaType = "google";
            dispatch({ type: 'signin', payload: userInfo.idToken });
            const googleCredential = authentication.GoogleAuthProvider.credential(userInfo.idToken);
            const firebaseUserCredential = authentication().signInWithCredential(googleCredential);
            // await AsyncStorage.setItem('token', userInfo.idToken);
            navigate('NewsListScreen');

        } catch (error) {
            console.log(error);
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong with sign in'
            });
        }
    }
}
const onFBLogin = (dispatch) => {
    return async () => {
        try {
            try {
                LoginManager.getInstance().logOut()
            } catch (error) {

            }
            const result = await LoginManager.logInWithPermissions([
                'public_profile',
                'email',
            ]);
            console.log('result', result);
            if (result.isCancelled) {
                // throw 'User cancelled the login process';
                console.log('User cancelled the login process');
            }
            const data = await AccessToken.getCurrentAccessToken();
            console.log('data', data);
            if (!data) {
                // throw 'Something went wrong obtaining access token';
                console.log('Something went wrong obtaining access token');
            }
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
            console.log('facebookCredential', facebookCredential);
            const firebaseUserCredential = auth().signInWithCredential(facebookCredential);
            console.log('firebaseUserCredential', firebaseUserCredential);
            // setuserInfo(userInfo);
            dispatch({ type: 'signin', payload: userInfo.idToken });
              navigate('NewsListScreen');
        } catch (error) {
            console.log(error);
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong with sign in'
            });
        } finally {

        }
    };
};
const signin = (dispatch) => {
    return async ({ username, password }) => {
        try {
            const result = await authentication().signInWithEmailAndPassword(username, password);
            console.log("result__________", result);

            // const response = await trackerApi.post('/signin', { email, password });
            // await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: result });

            navigate('NewsListScreen');
        } catch (error) {
            console.log(error);
                try {
                    const result = await authentication().createUserWithEmailAndPassword(username, password);
                    console.log("result__________", result);
                    result = await authentication().signInWithEmailAndPassword(username, password);
                } catch (error1) {
                    console.log(error1.message);
                    dispatch({
                        type: 'add_error',
                        payload: 'Something went wrong with sign in'
                    });
                }
        } finally {

        }
    };
};
const signout = (dispatch) => {
    return async () => {
        try {
            if (userInfo) {
                await GoogleContext.revokeAccess();
                await GoogleContext.signOut();
                authentication().signOut();
            }
        } catch (error) {
            console.error(error);
        }
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'signout' });
        navigate('LoginScreen');
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, clearErrorMessage, tryLocalSignin, onGmailLogin, onFBLogin },
    { token: null, errorMessage: '' }
);
