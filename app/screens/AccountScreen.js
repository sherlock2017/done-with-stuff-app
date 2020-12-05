import React from 'react';
import AppListItem from '../components/AppListItem';
import Screen from "../components/Screen";
import { FlatList, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeperator from '../components/ListItemSeperator';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]
function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <AppListItem
                    title="Rishabh Jain"
                    subtitle="rishabh.rj02@gmail.com"
                    image={require("../assets/ninja.jpg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({ item }) => 
                        <AppListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    }
                />
            </View>

            <AppListItem
                title="Log Out"
                IconComponent={
                    <Icon
                        name="logout"
                        backgroundColor="#ffe66d"
                    />
                }
            />
        </Screen>
    );
}

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
})