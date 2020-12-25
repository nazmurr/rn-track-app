import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";
import AccountForm from "../components/AccountForm";

const AccountScreen = () => {
  const { state, updateProfile, signout, clearErrorMessage } = useContext(
    AuthContext
  );

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2 style={styles.heading}>
        Manage Account
      </Text>
      <AccountForm
        onSubmit={updateProfile}
        errorMessage={state.errorMessage}
        clearErrorMessage={clearErrorMessage}
      />
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: ({ tintColor }) => (
    <FontAwesome name="gear" size={20} color={tintColor} />
  ),
  tabBarOptions: {
    activeTintColor: "#4169E1",
    inactiveTintColor: "gray",
  },
};

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    marginVertical: 10,
  },
});

export default AccountScreen;
