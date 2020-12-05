import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet, Switch, Text, TextInput, View
} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from "expo-constants"
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';

import AppCard from "./app/components/AppCard";
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import AppListItem from './app/components/AppListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 }
];

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState(categories[0]);

  console.log(Constants);
  console.log("require: ",require("./app/assets/icon.png"));
  return (
    // <View
    //   style={{
    //     backgroundColor: "#f8f4f4",
    //     padding: 20,
    //     paddingTop: 100
    //   }}>
    //   <AppCard
    //     title="Red jacket for sale"
    //     subtitle="$100"
    //     image={require("./app/assets/jacket.jpg")}
    //   >
    //     </AppCard>
    //   </View>
    // <ListingDetailsScreen />
    // <ViewImageScreen />
  // <WelcomeScreen/>
      // <MessagesScreen />
    // <AccountScreen />
    // <ListingsScreen />
    // <Screen>
    //   <AppPicker
    //     items={categories}
    //     icon="apps"
    //     placeholder="Category"
    //     selectedItem={category}
    //     onSelectItem={item => setCategory(item)}
    //   />
    //   <AppTextInput
    //     icon="email"
    //     placeholder = "email"
    //   />
    // </Screen>
    // <LoginScreen/>
  );
}

const styles = StyleSheet.create({
 
})
