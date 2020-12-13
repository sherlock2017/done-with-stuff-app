import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import AppListItem from '../components/AppListItem';

import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: "Rishabh Jain",
        description: 'I am very happy to see my first app. It\'s a dream come true',
        image: require('../assets/ninja.jpg')
    },
    {
        id: 2,
        title: "Ninja Me",
        description: 'I am also happy. I will learn this app completely and do wonders',
        image: require('../assets/ninja.jpg')
    },
    {
        id: 3,
        title: "Spider Man",
        description: "I am going to rock in spiderman part 3",
        image: require('../assets/ninja.jpg')
    },
    {
        id: 4,
        title: "Dr. Octopus",
        description: 'I will defeat spidy in next spideran sequal',
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