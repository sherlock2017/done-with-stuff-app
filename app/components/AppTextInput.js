import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import deafultStyles from "../config/styles";

function AppTextInput({icon,width = "100%", ...otherProps}) {
    return (
        <View style={[styles.container, {width}]}>
            {icon && <MaterialCommunityIcons
                size={20}
                color={deafultStyles.colors.medium}
                style={styles.icon}
                name={icon}
            />}
            <TextInput
            placeholderTextColor={deafultStyles.colors.medium}
                style={deafultStyles.text}
                {...otherProps}
            />
        </View>
    );
}

export default AppTextInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: deafultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        margin: 10
    }
})