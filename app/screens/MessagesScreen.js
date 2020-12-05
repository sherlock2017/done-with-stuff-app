import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import AppListItem from '../components/AppListItem';

import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: "T1",
        description: 'D1',
        image: require('../assets/ninja.jpg')
    },
    {
        id: 2,
        title: "T2",
        description: 'D2',
        image: require('../assets/ninja.jpg')
    },
    {
        id: 3,
        title: "T2",
        description: 'D2',
        image: require('../assets/ninja.jpg')
    },
    {
        id: 4,
        title: "T2",
        description: 'D2',
        image: require('../assets/ninja.jpg')
    }
]
function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        //delete the message from messages array
        setMessages(messages.filter(m => m.id != message.id));   // up
    }

    return (
        <Screen>
            <FlatList
            data={messages} 
            keyExtractor={messages => messages.id.toString()}
            renderItem={({ item }) =>
                <AppListItem
                    title={item.title}
                    subtitle={item.description}
                    image={item.image}
                    onPress={() => alert("item pressed")}
                    renderRightActions={() =>
                        <ListItemDeleteAction
                            onPress={() => handleDelete(item)}
                        />}
                />}
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={() =>
                    setMessages([
                        {
                            id: 4,
                            title: "T2",
                            description: 'D2',
                            image: require('../assets/ninja.jpg')
                        }
                    ])}
        />
        </Screen>
    );
}

export default MessagesScreen;

const styles = StyleSheet.create({
    
})