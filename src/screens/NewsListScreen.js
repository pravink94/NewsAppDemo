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
                        <View style={styles.item}>
                            <Text>{item.name}</Text>
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
        
    }
});


// NewsListScreen.navigationOptions = () => {
//     return {
//         headerShown: false,
//     };
// };

export default NewsListScreen;