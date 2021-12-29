import React, { useEffect, useContext } from 'react';
import {  ImageBackground, StatusBar, StyleSheet, View } from 'react-native';
import { Context as AuthContext } from '../contexts/AuthContext';
import { COLORS, IMAGES } from '../utils';

const ResultAuthScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        setTimeout(() => {
            tryLocalSignin();
        }, 3000);
    }, []);

    return (
        <View>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
            <ImageBackground
                style={styles.imageStyle}
                source={IMAGES.splashImage}
                />
        </View>
    );
};

const styles=StyleSheet.create({
    imageStyle:{
        width: '100%', height: '100%'
    }
});

export default ResultAuthScreen;
