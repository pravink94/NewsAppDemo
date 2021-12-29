import { StyleSheet } from 'react-native';

export const COLORS = {
    primaryColor: 'rgba(255,78,41,0.8)',
    secondaryColor: 'rgba(255,78,41,0.5)',
    background_sky: 'rgba(243,252,255,1)',
    gray: 'rgba(191,191,191,1)',
    border: 'rgba(234,234,234,1)',
    black: 'rgba(0,0,0,1)',
    white: 'rgba(255,255,255,1)',
    green: '#00BFB8'
}
export const IMAGES = {
    splashImage: require('../../assets/splash.jpg'),
    logoWithName: require('../../assets/logoWithName.png'),
    loginWithGmail: require('../../assets/google.png'),
    loginWithFb: require('../../assets/facebook.png'),
    mountain: require('../../assets/mountain.jpg'),
 }
export const STYLES = StyleSheet.create({
    parentStyle: {
        flex: 1.0,
        backgroundColor: COLORS.white,

    },
    container: {
        flex: 1.0,
        backgroundColor: COLORS.white,
    },
    scrollStyle: {
        flex: 1.0,
        backgroundColor: COLORS.white,
    },
    ScreenHeadline:{
        fontSize:18,
        color:'red'
    },
    AppLogoWithName: {
        resizeMode:'center',
        width: '100%',
    },

});
