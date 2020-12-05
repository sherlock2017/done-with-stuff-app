import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';

import AppListItem from "../components/AppListItem";
function ListingDetailsScreen(props) {
    return (
        <View>
            <Image
                style={styles.image}
                source={require("../assets/jacket.jpg")}></Image>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Jacket for sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <AppListItem
                        image={require("../assets/ninja.jpg")}
                        title="Rishabh Jain"
                        subtitle="5 Listings"
                    />
                </View>
            </View>
       </View>
    );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 300
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20
    },
    userContainer: {
        marginVertical: 40
    }
})