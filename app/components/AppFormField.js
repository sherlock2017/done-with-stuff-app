import React from 'react';
import AppTextInput from "../components/AppTextInput";
import AppErrorMessage from "../components/AppErrorMessage";
import { useFormikContext } from "formik";

function AppFormField({ name, ...otherProps }) {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
    return (
        <>
            <AppTextInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                {...otherProps}
            />
            {<AppErrorMessage error={errors[name]} visible={touched[name]} />}
        </>
    );
}

export default AppFormField;