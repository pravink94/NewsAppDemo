import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { APPContext } from '../contexts/AppProvider';

const NewsListScreen = () => {
    const { getAllUSers } = useContext(APPContext);
    const [users, setAllUsers] = useState([]);

    useEffect(async () => {
        const allUSers = await getAllUSers()
        console.log(allUSers);
        setAllUsers(allUSers);
        return () => {

        }
    }, [])

    return (
        <View style={styles.parent}>
            <Text>NewsListScreen</Text>
            
            <FlatList
                style={styles.list}
                data={users}
                keyExtractor={(user) => user.id}
                renderItem={({ user}) => {
                    return (
                        <View style={styles.item}>
                            <Text>{user.name}</Text>
                        </View>
                    )
                }} />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
    parent: {
        flex: 1,
    },
    item:{
        color:'white',
        backgroundColor:'black'
        
    }
});


// NewsListScreen.navigationOptions = () => {
//     return {
//         headerShown: false,
//     };
// };

export default NewsListScreen;