import React from 'react';
import { AppForm, AppFormField, AppSubmitButton } from '../components/forms';
import Screen from '../components/Screen';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{name: '', email: '', password: ''}}
                onSubmit={values => alert(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="name"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    placeholder="Name"
                    textContentType="name"
                />

                <AppFormField
                    name="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    placeholder="Email"
                    textContentType="emailAddress"
                />

                <AppFormField
                    name="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />

                <AppSubmitButton title="Register"/>
            </AppForm>
        </Screen>
    );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})