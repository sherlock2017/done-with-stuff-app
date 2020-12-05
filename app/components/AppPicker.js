import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Platform, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import deafultStyles from "../config/styles";
import AppText from './AppText';
import { TouchableWithoutFeedback } from 'react-native';
import Screen from "../components/Screen";
import AppPickerItem from './AppPickerItem';
import AppButton from './AppButton';

function AppPicker({icon, items, placeholder, onSelectItem, selectedItem}) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons
                        size={20}
                        color={deafultStyles.colors.medium}
                        style={styles.icon}
                        name={icon}
                    />}
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons
                        size={20}
                        color={deafultStyles.colors.medium}
                        name="chevron-down"
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <AppButton color="secondary" title="Close" onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={items => items.value.toString()}
                        renderItem={({ item }) => 
                            <AppPickerItem
                                label={item.label}
                                onPress={() =>          
                                    {
                                        setModalVisible(false);
                                        onSelectItem(item);
                                    }
                                }
                            />
                        }
                    />
                </Screen>
            </Modal>
        </>
    );
}

export default AppPicker;

const styles = StyleSheet.create({
    container: {
        backgroundColor: deafultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        margin: 10
    },
    text: {
        flex: 1
    }
})