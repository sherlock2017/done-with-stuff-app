import React from 'react';
import { Image, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import AppErrorMessage from "../components/AppErrorMessage";
import Screen from "../components/Screen";
import { Formik } from "formik";
import * as Yup from 'yup';
import AppFormField from '../components/AppFormField';
import AppSubmitButton from '../components/AppSubmitButton';
import AppForm from '../components/AppForm';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")} />
            
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                            <AppFormField
                                name="email"
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                                icon="email"
                                placeholder="Email"
                                textContentType="emailAddress"
                            />

                            <AppFormField
                                name="password"
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="lock"
                                placeholder="Password"
                                secureTextEntry
                                textContentType="password"
                            />

                            <AppSubmitButton title="Login" />
            </AppForm>
        </Screen>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10
    },  
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
})