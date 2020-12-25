import React, { useState, useEffect } from "react";
import { NavigationEvents } from "react-navigation";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({
  headerText,
  errorMessage,
  clearErrorMessage,
  onSubmit,
  submitButtonText,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (errorMessage) setFormSubmitted(false);
  }, [errorMessage]);

  return (
    <>
      <NavigationEvents onWillFocus={() => setFormSubmitted(false)} />
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? (
        <Spacer>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </Spacer>
      ) : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => {
            clearErrorMessage();
            setFormSubmitted(true);
            onSubmit({ email, password });
          }}
          disabled={formSubmitted && !errorMessage ? true : false}
          loading={formSubmitted && !errorMessage ? true : false}
          disabledStyle={styles.disabled}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
  },
  disabled: {
    backgroundColor: "#cccccc",
  },
});

export default AuthForm;
