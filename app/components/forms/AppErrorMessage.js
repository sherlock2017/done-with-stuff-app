import React from 'react';
import { StyleSheet } from 'react-native';

import AppText from "../AppText";

function AppErrorMessage({error, visible}) {
    if (!visible || !error) return null;

    return (
        <AppText style={styles.error}>{error}</AppText>
    );
}

export default AppErrorMessage;

const styles = StyleSheet.create({
    error: {
        color: "red",
        paddingLeft: 10
    }
})