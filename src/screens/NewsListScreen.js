import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { APPContext } from '../contexts/AppProvider';

const NewsListScreen = () => {
    const { getAllUSers } = useContext(APPContext);
    const [users, setAllUsers] = useState([]);

    useEffect(async () => {
        const allUSers = await getAllUSers();
        console.log("allUSers",allUSers);
        setAllUsers(allUSers);
        return () => {

        }
    }, [])

    return (
        <View style={styles.parent}>
            <Text>NewsListScreen</Text>
            <Text>{users.length}</Text>

            <FlatList
                data={users}
                keyExtractor={user => user.id}
                renderItem={({ user }) => {
                    console.log("IndexScreen FlatList renderItem ->" + user);
                    return (
                        <View style={styles.item}>

                        </View>
                    );
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
    item: {
        height:50,
        color: 'black',
        backgroundColor: 'black'
    }
});


// NewsListScreen.navigationOptions = () => {
//     return {
//         headerShown: false,
//     };
// };

export default NewsListScreen;