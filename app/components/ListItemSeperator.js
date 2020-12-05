import React from 'react';
import colors from '../config/colors';
import { View, StyleSheet } from 'react-native';

function ListItemSeperator() {
    return (
    <View style={styles.seperator} />
    );
}

export default ListItemSeperator;

const styles = StyleSheet.create({
    seperator: {
        width: "100%",
        height: 1,
        backgroundColor: colors.light
    }
})