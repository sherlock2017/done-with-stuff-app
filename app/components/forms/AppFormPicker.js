import React from 'react';
import AppPicker from '../AppPicker';
import AppErrorMessage from "./AppErrorMessage";
import { useFormikContext } from "formik";

function AppFormPicker({items, name,numberOfColumns, PickerItemComponent, placeholder, width}) {
    const {errors, setFieldValue, touched, values } = useFormikContext();
    return (
        <>
            <AppPicker
                width={width}
                items={items}
                numberOfColumns={numberOfColumns}
                onSelectItem={(item) => setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
            ></AppPicker>
            <AppErrorMessage error={errors[name]} visible={touched[name]} />    
        </>
    );
}

export default AppFormPicker;