import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.container}>
          <NavigationEvents onWillFocus={clearErrorMessage} />
          <AuthForm
            headerText="Sign In to Your Account"
            errorMessage={state.errorMessage}
            clearErrorMessage={clearErrorMessage}
            submitButtonText="Sign In"
            onSubmit={signin}
          />
          <NavLink
            text="Don't have an account? Sign up instead!"
            routeName="Signup"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
    //borderColor: 'red',
    //borderWidth: 10
  },
  contentContainerStyle: {
    paddingVertical: 150,
    //borderColor: 'blue',
    //borderWidth: 10
  },
});

export default SigninScreen;
