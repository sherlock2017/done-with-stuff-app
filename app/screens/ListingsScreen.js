import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import AppCard from '../components/AppCard';

import Screen from "../components/Screen";
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: "Red jacket for sale",
        price: 100,
        image: require("../assets/jacket.jpg")
    },
    {
        id: 2,
        title: "Couch for sale",
        price: 150,
        image: require("../assets/couch.jpg")
    },
    {
        id: 3,
        title: "Aviators for sale",
        price: 50,
        image: require("../assets/aviators.jpg")
    }
];
function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => 
                    <AppCard
                        title={item.title}
                        subtitle={"$" + item.price}
                        image={item.image}
                    />
                }
            />
        </Screen>
    );
}

export default ListingsScreen;

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})