import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { APPContext } from '../contexts/AppProvider';

const NewsListScreen = () => {
    const { getAllUSers } = useContext(APPContext);
    const [users, setAllUsers] = useState([]);

    useEffect(async () => {
        const allUSers = await getAllUSers();
        // console.log("allUSers",allUSers);
        setAllUsers(allUSers);
        // for (let index = 0; index < allUSers.length; index++) {
        //     const element = allUSers[index];
        //     console.log("element", element.name);
        // }
        return () => {

        }
    }, [])

    return (
        <View style={styles.parent}>
            <FlatList
                data={users}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.viewStyle}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.address}>{item.address.city}</Text>
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
    viewStyle: {
        marginVertical:10
    },
    name: {
        fontSize: 16,
        color: 'black',
    },
    address: {
        fontSize: 13,
        color: 'gray',
    }
});


// NewsListScreen.navigationOptions = () => {
//     return {
//         headerShown: false,
//     };
// };

export default NewsListScreen;