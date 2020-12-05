import React from 'react';
import { Text, StyleSheet } from 'react-native';

function AppText1({children}) {
    return (
        <Text style={styles.text}>
            {children}
        </Text>
    );
}

export default AppText1;

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: "Roboto"
    },
})