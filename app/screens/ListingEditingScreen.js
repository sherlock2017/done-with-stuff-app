import React, { useState } from 'react';
import Screen from '../components/Screen';
import { StyleSheet } from 'react-native';
import { AppForm, AppFormField, AppSubmitButton } from '../components/forms';
import * as Yup from 'yup';
import AppFormPicker from '../components/forms/AppFormPicker';
import AppCategoryPickerItem from '../components/AppCategoryPickerItem';

const validationSchema = Yup.object().shape({
    title: Yup.string().min(1).required().label("Title"),
    price: Yup.number().min(1).max(1000).required().label("Price"),
    category: Yup.string().required().nullable().label("Category"),
    description: Yup.string().label("Description")
});
const categories = [
    { label: "Furniture", value: 1, backgroundColor:'orange', icon: 'apps'},
    { label: "Clothing", value: 2, backgroundColor:'lightblue', icon: 'email' },
    { label: "Cameras", value: 3, backgroundColor:'blue', icon: 'phone' },
    { label: "Games", value: 4, backgroundColor:'purple', icon: 'phone' },
    { label: "Cars", value: 5, backgroundColor:'gray', icon: 'phone' },
    { label: "Sports", value: 6, backgroundColor:'yellow', icon: 'phone' },
    { label: "Movies & Music", value: 7, backgroundColor:'violet', icon: 'phone' },
    { label: "Books", value: 8, backgroundColor:'pink', icon: 'phone' },
    { label: "Others", value: 9, backgroundColor:'tomato', icon: 'phone' },
  ];
function ListingEditingScreen(props) {
    const [category, setCategory] = useState(categories[0]);

    return (
       <Screen style={styles.container}>
           <AppForm
            initialValues={{title: '', price: '',category: null, description: ''}}
            onSubmit={values => alert(values)}
            validationSchema={validationSchema}
           >
                <AppFormField
                    maxLength={255}
                    name="title"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    placeholder="Title"
                    textContextType="none"
                />

                <AppFormField
                    width="25%"
                    maxLength={8}
                    name="price"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="numeric"
                    placeholder="Price"
                    textContextType="none"
                />

                <AppFormPicker 
                    width="50%"
                    name="category"
                    items={categories}
                    numberOfColumns={3}
                    placeholder="Category"
                    PickerItemComponent={AppCategoryPickerItem}
                />

                <AppFormField
                    maxlength={255}
                    multiline
                    numberOfLines={3}
                    name="description"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    placeholder="Description"
                    textContextType="none"
                />

                <AppSubmitButton title="Post"/>
           </AppForm>
       </Screen>
    );
}

export default ListingEditingScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10 
    }
})