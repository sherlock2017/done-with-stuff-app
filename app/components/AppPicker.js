import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Platform, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import deafultStyles from "../config/styles";
import AppText from './AppText';
import { TouchableWithoutFeedback } from 'react-native';
import Screen from "../components/Screen";
import AppPickerItem from './AppPickerItem';
import AppButton from './AppButton';

function AppPicker({icon, items, numberOfColumns = 1, onSelectItem, placeholder, PickerItemComponent = AppPickerItem, selectedItem, width = "100%"}) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, {width}]}>
                    {icon && <MaterialCommunityIcons
                        size={20}
                        color={PadeafultStyles.colors.medium}
                        style={styles.icon}
                        name={icon}
                    />}
                    {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>}
                    {/* <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText> */}
                    <MaterialCommunityIcons
                        size={20}
                        color={deafultStyles.colors.medium}
                        name="chevron-down"
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <AppButton color="primary" title="Close" onPress={() => setModalVisible(false)} />
                    <FlatList
                        numColumns={numberOfColumns}
                        data={items}
                        keyExtractor={items => items.value.toString()}
                        renderItem={({ item }) => 
                            <PickerItemComponent
                                item={item}
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
        alignItems: "center",
        padding: 15,
        marginVertical: 10
    }, 
    icon: {
        margin: 10
    },
    placeholder: {
        color: deafultStyles.colors.medium
    },
    text: {
        flex: 1
    }
})