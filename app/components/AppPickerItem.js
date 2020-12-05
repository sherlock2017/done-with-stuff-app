import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AppText from './AppText';

function AppPickerItem({label, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{label}</AppText>
        </TouchableOpacity>
    );
}

export default AppPickerItem;

const styles = StyleSheet.create({
    text: {
        padding: 20
    }
})