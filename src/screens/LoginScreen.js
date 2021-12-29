import React, { useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { NavigationEvents } from 'react-navigation'
import { Button, Image, Input } from "../components";
import { Context } from '../contexts/AuthContext';
import { COLORS, IMAGES, STYLES } from "../utils";
import { Context as AuthContext } from '../contexts/AuthContext';

import {
    Alert,
    Platform,
} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

const LoginScreen = () => {
    const [isSecurityON, changeSecurityStatus] = useState(true);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);

    const [userInfo, setuserInfo] = useState([]);

    const { onGmailLogin, onFBLogin, signin } = useContext(AuthContext);

    useEffect(async () => {
        // if (Platform.Version < 23) {
        //     FingerprintScanner
        //         .authenticate({ onAttempt: this.handleAuthenticationAttemptedLegacy })
        //         .then(() => {
        //             Alert.alert('Fingerprint Authentication', 'Authenticated successfully');
        //         })
        //         .catch((error) => {
        //             console.log("error", error);
        //         });
        // } else {
        //     try {
        //         FingerprintScanner
        //             .isSensorAvailable()
        //             .authenticate({ title: 'Log in with Biometrics' })
        //             .then(() => {
        //                 console.log("FingerprintScanner success");
        //                 // Alert.alert('Fingerprint Authentication', 'Authenticated successfully');
        //             })
        //             .catch((err) => {
        //                 console.log("err", err);

        //             });
        //     } catch (err) {
        //         console.log("error", err);

        //     }
        // }
        // FingerprintScanner.release();

    }, []);


    const signOut = async () => {
        try {
            if (userInfo) {
                await GoogleSignin.revokeAccess();
                await GoogleSignin.signOut();
                auth().signOut();
                setuserInfo(null);
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const onLoginWithGmail = async () => {
        try {
            onGmailLogin();
        } catch (error) {
            console.log("error", error);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    }

    const onLoginWithFb = async () => {
        try {
            onFBLogin();

        } catch (error) {
            console.log('error', error);
        }
    }

    const onLogin = async () => {
        try {
            if (username !== '' && password !== '') {
                signin({ username, password });
            }
        } catch (error) {
            console.log(error.message);

        }
    };

    return (
        <View style={STYLES.parentStyle}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
            <SafeAreaView style={STYLES.container}>
                <ScrollView
                    style={STYLES.scrollStyle}
                    showsVerticalScrollIndicator={false}>

                    <Image imageStyle={STYLES.AppLogoWithName}
                        source={IMAGES.logoWithName} />

                    <Input style={styles.inputView}
                        label="UserName"
                        placeholder={'Enter username'}
                        onChangeText={text => {
                            setUserName(text);
                        }}
                    />
                    <Input style={styles.inputView}
                        label="Password"
                        placeholder={'Enter your Password'}
                        onChangeText={text => {
                            setPassword(text);
                        }}
                        secureTextEntry={isSecurityON}

                    />
                    <Text
                        style={[styles.inputView, { marginTop: 8, alignSelf: 'flex-end' }]}
                        size="12"
                        weight="bold"
                        align="center"
                        color={COLORS.primaryColor}
                        onPress={() => {
                            // onForgot();
                        }}>
                        {'Forget Password?'}
                    </Text>
                    <Button
                        style={[styles.inputView, { marginTop: 25 }]}
                        textColor={COLORS.white}
                        title={'Login'}
                        onPress={() => {
                            onLogin();
                        }}
                    />
                    <Button
                        style={[styles.inputView, { marginTop: 20, marginBottom: 20 }]}
                        title={'Register'}
                        type={1}
                        onPress={() => {
                            onRegister();
                        }}
                    />

                    <View style={{ marginTop: 20, alignSelf: 'center', flexDirection: 'row', }}>
                        <Text style={{ fontSize: 12 }}>--------------------------------   OR   --------------------------------</Text>
                    </View>

                    <View style={{ alignSelf: 'center', flexDirection: 'row', }}>
                        <Image
                            activeOpacity={0.9}
                            onPress={() => {
                                onLoginWithGmail();
                            }}
                            imageStyle={{ margin: 20, width: 80, height: 80 }}
                            source={IMAGES.loginWithGmail}
                        />
                        <Image
                            activeOpacity={0.9}
                            onPress={() => {
                                onLoginWithFb();
                            }}
                            imageStyle={{ margin: 20, width: 80, height: 80 }}
                            source={IMAGES.loginWithFb}
                        />
                    </View>


                </ScrollView>
            </SafeAreaView>


        </View>
    );
};

const styles = StyleSheet.create({
    inputView: {
        marginHorizontal: 30,
    },
});


// LoginScreen.navigationOptions = () => {
//     return {
//         headerShown: false,
//     };
// };

export default LoginScreen;