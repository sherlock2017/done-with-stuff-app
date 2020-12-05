import React from 'react';
import { Text } from 'react-native';
import defaultStyles from "../config/styles";

function AppText({children, style}) {
    return (
        <Text style={[defaultStyles.text, style]}>
            {children}
        </Text>
    );
}

export default AppText;
// Platform.select({
//     ios: {
//         fontSize: 20,
//         fontFamily: "Avenir"
//     },
//     android: {
//         fontSize: 18,
//         fontFamily: "Roboto"
//     }
// })
