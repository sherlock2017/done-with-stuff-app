import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

function AppCategoryPickerItem({item, onPress}) {
    return (
        <View style={styles.container}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
            <AppText style={styles.label}>{item.label}</AppText>
        </View>
    );
}

export default AppCategoryPickerItem;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingVertical: 12.5,
        alignItems: "center",
        width: "33%"
    },
    label:{
        marginTop: 5,
        textAlign: "center"
    }
})